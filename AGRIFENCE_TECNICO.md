# Agrifence — Documentação Técnica e de Produto

> Visão aprofundada do **Agrifence**: o que a plataforma monitora, como os dados fluem do campo até o relatório, quais funcionalidades o produtor rural tem à disposição e como cada uma é suportada pela arquitetura de software. Este documento combina a visão de **produto** (o que o produtor enxerga e decide) com a visão **técnica** (modelos, rotinas, processamento geoespacial e integração de hardware).

---

## 1. Visão geral do produto

O Agrifence é uma plataforma de **inteligência operacional agrícola** que rastreia, em nível de segundo e de metro quadrado, o que acontece dentro da porteira. Ele fecha o ciclo completo:

1. **Coleta** — o dispositivo embarcado **Agribox** instalado em cada máquina transmite telemetria (GPS, velocidade, RFID do operador, status do implemento).
2. **Processamento** — a nuvem Agrifence ingere os arquivos do equipamento, valida coordenadas, classifica pontos (trabalho correto × incorreto × deslocamento), recorta por cercas virtuais e agrega em “Trabalhos” e “Logísticas”.
3. **Inteligência de negócio (BI)** — cálculos de custo, eficiência, cobertura, velocidade e área por talhão, safra, cultura, janela operacional, máquina, implemento e operador.
4. **Entrega** — painéis interativos no **Agri-Vision** (SPA em React) e relatórios exportáveis em **PDF**, além de notificações externas (WhatsApp via Celery Beat).

### Personas

- **Produtor / gestor da fazenda** — quer custo por hectare, por safra e por talhão; comparação entre máquinas, operadores e implementos; provas de execução.
- **Agrônomo / gerente operacional** — quer velocidade, cobertura, tempo correto × incorreto por trabalho e mapa com rastro colorido.
- **Time de manutenção / TI agrícola** — precisa monitorar saúde do Agribox (ESP32, GPS, storage, rede, servidor) e programar manutenção.
- **Administrador da plataforma (agrisat)** — acesso a telemetria ao vivo, gestão multi-empresa, lotes de fabricação e distribuição de hardware.

---

## 2. Arquitetura em alto nível

```
┌──────────────┐    arquivos/logs    ┌──────────────────┐
│   Agribox    │ ──────────────────▶ │   API Flask      │
│ (ESP32+RPi)  │   (HTTP auth por    │   /collect/*     │
│ GPS + RFID   │    device token)    │   validação +    │
└──────────────┘                     │   storage (Minio)│
        ▲                            └────────┬─────────┘
        │ status a cada 20 min                │ Celery tasks (Redis)
        │ (/agribox/status)                   ▼
        │                            ┌──────────────────┐
        │                            │ Processamento    │
        │                            │ geoespacial      │
        │                            │ PostGIS + Shapely│
        │                            │ + pyproj (UTM)   │
        │                            └────────┬─────────┘
        │                                     │
        │                            ┌────────▼─────────┐
        │                            │ Works, Logistics,│
        │                            │ Coordinates,     │
        │                            │ Coverage (geom)  │
        │                            └────────┬─────────┘
        │                                     │ REST + JWT
        │                            ┌────────▼─────────┐
        │                            │ Agri-Vision (SPA)│
        │                            │ React + Leaflet +│
        │                            │ React Query +    │
        │                            │ Ant Design       │
        │                            └──────────────────┘
```

### Stack efetivo

- **Backend:** Flask 3, SQLAlchemy 2, Flask-Migrate, Marshmallow, PostGIS via GeoAlchemy2, Shapely 2, pyproj, OpenCV, Celery 5 + Redis, Minio (S3-compatible), Sentry, JWT (PyJWT), Gunicorn.
- **Banco:** PostgreSQL com extensão PostGIS (SRID 4326 para armazenamento; conversão para UTM para cálculos métricos).
- **Frontend:** React 18, Vite 7, React Router 6, Tailwind, Ant Design 5, **React Query (TanStack)**, Axios, **Leaflet + react-leaflet + leaflet-hotline** para mapas, Nivo/ECharts para gráficos, `@react-pdf/renderer` + `html-to-image` para exportação.
- **Ops:** Docker Compose (api, celery, redis), scheduled jobs via Celery Beat, Sentry para observabilidade de erros.

### Jobs agendados (Celery Beat)

Definidos em `app/__init__.py`:

| Job | Schedule | Função |
|---|---|---|
| `create-work-from-db` | diário 10:00 | Consolida trabalhos a partir dos arquivos de coleta processados. |
| `send-whatsapp-reminders` | diário 09:00 | Dispara lembretes operacionais para destinatários cadastrados. |
| `check-agribox-offline-status` | a cada 20 min | Detecta Agriboxes offline e gera alertas. |

---

## 3. Modelo de dados — o que o Agrifence monitora

O sistema é organizado em domínios. Todos os modelos estão em `server-dev-configuration/api/app/models/`.

### 3.1 Domínio de fazenda e geofencing

- **`Fencing`** — fazenda/cerca virtual.
- **`Polygon`** — talhão, com geometria (PostGIS), camada (layer), fazenda e vínculos a safra/cultura.
- **`Crop`** / **`Harvest`** — cultura e safra; permitem comparação safra a safra.
- **`Window` / `TypeImplementWindow`** — janelas operacionais (plantio, pulverização, colheita) e quais tipos de implemento as realizam. Serve para classificar automaticamente o trabalho.
- **`CropPolygon`** — associação N:N entre culturas e talhões por safra.

### 3.2 Domínio de frota

- **`Machine` + `MachineType` + `Manufacturer`** — inventário da frota.
- **`MachineCost`** — custo/hora **versionado por safra** (PK composta `id_maq + id_safra`).
- **`Implement` + `ImplementType` + `ImplementCost`** — mesmo padrão para implementos (inclui largura de trabalho, usada para cálculo de cobertura).
- **`Operator` + `OperatorCost`** — operadores, com custo/hora por safra e vínculo a RFID.

### 3.3 Domínio Agribox (hardware embarcado)

`app/models/agribox.py` modela o dispositivo inteiro:

- **`AgriboxBatch` + `AgriboxManufactureLocation`** — lote de fabricação, versão de hardware, custo, local.
- **`Agribox`** — o dispositivo em si (serial, versões de ESP32/RPi).
- **`AgriboxStatus`** — snapshot operacional com saúde detalhada:
  - **ESP32:** versão, status, tentativas, tempo desconectado.
  - **Storage:** status e número de devices.
  - **GPS:** satélites, sinal, velocidade, lat/lon, última validade, tempo sem dado válido.
  - **Raspberry Pi:** versão, cronômetro, operator_id/implement_id lidos via RFID, log file, contagem de logs.
  - **Network:** tipo, velocidade, IPv4, IP remoto, tem internet?
  - **Server:** status de autenticação, tentativas, tempo desconectado.
- **`AgriboxStorage`** — inventário de arquivos gerados pelo device (upload, cópia, URL, path USB).
- **`AgriboxOperation`** — cada sessão ligada/desligada do Agribox, com contagem de logs e métricas de falhas (tempo sem GPS, sem internet, sem ESP, sem servidor, falha de energia).
- **`AgriboxMetrics`** — acumulados de horas ligadas, tempo sem GPS/internet/servidor/ESP, total de logs.
- **`AgriboxMaintenance`** — ordens de manutenção (título, custo, status, período).

### 3.4 Domínio de coleta (raw telemetry)

- **`Coordinate`** (`coordinates`) — ponto GPS bruto com:
  - `latitude`, `longitude`, `speed`, `datetime`, `geom POINT srid=4326`.
  - `speed_classification`: `correct` | `incorrect` | `displacement` (classificação por operação).
  - Chaves: `module_id` (Agribox), `operator_id`, `implement_id`, `machine_id`, `work_id`, `logistics_id`, `filename`, `company_id`.
  - Vários índices compostos para consultas quentes (inclusive parcial `postgresql_where='work_id IS NULL'` para fila de processamento).
- **`File` / `StorageFile`** — arquivos enviados pelo Agribox (metadados, status de processamento).
- **`Rfid`** — tags físicas vinculadas a operadores/implementos.

### 3.5 Domínio de trabalho consolidado

- **`Work`** — atividade produtiva dentro de um talhão. Campos centrais:
  - `polygon_id`, `harvest_id`, `crop_id`, `window_id`, `fence_id`.
  - `start_datetime`, `end_datetime`, `duration` (s).
  - `cost` (R$).
  - `average_speed`, `min_speed`, `max_speed`.
  - `distance` (m), `qtd_coordinates`.
  - `average_efficiency`.
  - `correct_duration`, `incorrect_duration`, `displacement_duration`.
  - `covered_area` (m²), `coverage_percentage` (0–100).
  - `coverage_geom` — polígono de buffer da trajetória clipado ao talhão (PostGIS).
  - `is_out_of_windows` — marcado quando o trabalho não se encaixa em nenhuma janela operacional esperada.
  - `completed` — indica se o trabalho foi fechado.
- **`WorkImplement` / `WorkOperator` / `WorkMachine`** — associações N:N que permitem múltiplos recursos por trabalho.
- **`Logistics`** + **`LogisticMachine/Operator/Implement`** — deslocamentos e manobras fora do talhão, com mesma estrutura de tempo, custo e associações. Separação fundamental: **trabalho produz hectares; logística só consome R$**.

### 3.6 Relatórios persistidos

`app/models/report.py`:

- **`Report`** — cada relatório gerado é persistido com `relatorio` (tipo), janela de datas, `resultado` em JSON, status e usuário criador.
- **`MachineReport` / `OperatorReport` / `ImplementReport` / `PolygonReport`** — tabelas de seleção que registram exatamente quais entidades entraram no relatório, para reabertura e auditoria.

### 3.7 Notificações

`app/models/recipient.py`:

- **`Recipient`, `NotificationType`, `Channel`, `RecipientSubscription`, `MessageLog`** — destinatários (WhatsApp/email), tipos de notificação e log de envios.

---

## 4. Pipeline de coleta e processamento

### 4.1 Autenticação e ingestão

- Rotas em `app/routes/collect/`:
  - `GET /collect/connection` — cria `connection_id` (timestamp + UUID).
  - `GET /collect/sync` — device consulta o último arquivo sincronizado.
  - Upload de arquivos via `save_and_process_file` → Minio + fila Celery.
- Autenticação de device: `requires_device_auth` (token específico do Agribox), separada da `requires_auth` (JWT de usuário) e `requires_superadmin_auth`.

### 4.2 Normalização

`app/routes/collect/functions.py`:

- `normalize_filename`, `parse_filename_datetime`, `format_datetime_iso` — padronização de nomes/datas.
- `check_existing_storagefile` — evita duplicatas.
- `synchronize_with_device` e `update_module_sync_status` — mantêm o estado de sincronização do Agribox.

### 4.3 Tarefas assíncronas

- `process_file_task` — parse do arquivo, validação de coordenadas (`valid`, `errors` na `Coordinate`), persistência.
- `smooth_invalid_rfids_task` — correção de leituras de RFID ruidosas (tag mal lida entre dois pontos consecutivos).
- `create_work_from_file` — job noturno que agrupa coordenadas contíguas em `Work` e `Logistics`.

### 4.4 Agrupamento e geometria

Em `app/routes/work/`:

- `work_creator.py` — cria Works a partir de sequências de coordenadas dentro de polígonos.
- `work_grouping.py` — lógica de “o que conta como um trabalho” (gap temporal, mudança de talhão, mudança de implemento).
- `work_metrics.py` — cálculo de durações (`correct/incorrect/displacement`), velocidades (média/min/max), distância, cobertura.
- `coverage_geom` — buffer da trajetória pela largura do implemento (`ST_Buffer`) e clip pelo polígono do talhão (`ST_Intersection`).
- `coverage_percentage` = `ST_Area(coverage_geom) / ST_Area(polygon.geom)`.
- Conversões métricas via `Geo2UTM` (pyproj) para precisão em metros/m².

### 4.5 Classificação correta × incorreta × deslocamento

Cada coordenada recebe `speed_classification`:
- **correct** — velocidade dentro da faixa esperada da operação/implemento.
- **incorrect** — implemento ligado mas fora da faixa (rápido/lento demais).
- **displacement** — sem implemento ativo (deslocamento, manobra).

Essa classificação alimenta diretamente `correct_duration`, `incorrect_duration`, `displacement_duration` do `Work` e o módulo **Logística**.

---

## 5. API — blueprints principais

Todos os blueprints são registrados em `app/__init__.py`:

| Blueprint | Responsabilidade |
|---|---|
| `auth_bp` | Login, emissão de JWT, perfis. |
| `company_bp` / `unit_bp` | Multi-empresa e unidades de medida preferidas do usuário. |
| `agribox_bp` | Gestão do hardware: `batch`, `maintenance`, `manufacturing`, `operation`, `version`, `main`. |
| `machine_bp` / `implement_bp` / `operator_bp` | CRUD e custos versionados por safra. |
| `rfid_bp` | Cadastro e binding de tags RFID. |
| `harvest_bp` | Safras. |
| `fence_bp` / `polygons_bp` / `crop_bp` | Geofencing — fazendas, talhões e culturas por polígono. |
| `work_bp` | Trabalhos: listagem filtrada, backup, tipos, criação, agrupamento, métricas, tasks. |
| `logistic_bp` | Logística e criador automático. |
| `collect_bp` | Endpoints do dispositivo Agribox (sync, upload, validação). |
| `coordinate_bp` | Acesso granular às coordenadas. |
| `recipients_bp` | Destinatários e canais de notificação. |
| `tasks_bp` | Tarefas e orquestração operacional. |
| `agrifence_bi` / `agrifence_bi_area` / `agrifence_bi_velocity` / `agrifence_bi_time` / `agrifence_bi_realtime` | BI — relatórios agregados por área, velocidade, tempo e tempo real. |

### 5.1 BI — endpoints relevantes

- `POST /bi/area/reports` — gera relatório oficial de área por período + seleção de polígonos (validação via `ReportSchema`, persistência em `Report`, task Celery `process_report`, retorno assíncrono por `status`/`resultado`).
- **Realtime** (`/bi/realtime/...`) — alimenta a tela **Telemetria Ao Vivo** com posição, status e operador atual de cada máquina.
- **Velocity** (`/bi/velocity/...`) — polylines coloridas por velocidade, hotline data e métricas por trabalho.
- **Time** — janelas e tempos por polígono.

---

## 6. Frontend — Agri-Vision

### 6.1 Organização do SPA

- Entry: `src/App.jsx`. Rotas protegidas por `ProtectedRoute` que consulta `AppContext` (`isLogged`, `isAgrisat`, `isLoading`).
- Contextos: `AppContext` (sessão e `preferences` de unidade), `MachineryContext` (máquinas/implementos em cache), `ExportPdfContext` (estado de exportação).
- Cache HTTP: **React Query** (`useDashboardDataQuery`, `useWorksInfos`) — evita requests duplicados ao trocar filtros.
- Mapas: **Leaflet** com:
  - `MapSection` — mapa principal com polígonos.
  - `MapWithSpeedPolylines` — rastros coloridos por velocidade.
  - `MapWithHotline` — modo heatmap via `leaflet-hotline`.
  - `SelectedPolygonsWidget` — ações em lote sobre seleção.
- Exportação PDF: combinação de `html-to-image` (`toPng`) + `@react-pdf/renderer`, orquestrada pelo `ExportPdfContext`.

### 6.2 Rotas e telas

| Rota | Componente | Papel |
|---|---|---|
| `/` | `Login` | Autenticação. |
| `/home` | `NewHome` | Dashboard geral: mapa + filtros + painel de custos e operações. |
| `/machine` | `MachineDashboard` | Análise por máquina (cards + métricas). |
| `/implement` | `ImplementDashboard` | Análise por implemento. |
| `/operator` | `OperatorDashboard` | Análise por operador. |
| `/velocity` | `Velocity` | Rastro colorido por velocidade, histograma, seleção de trabalhos, Work Finder. |
| `/time` | `Time` | Análise temporal por polígono, modais de trabalhos. |
| `/area` | `Area` | Geração de relatórios oficiais de área, lista de histórico, modais de detalhes. |
| `/logistics` | `Logistics` | Métricas exclusivas de logística. |
| `/live` | `Live` | **Telemetria ao vivo** — disponível apenas para usuários `agrisat`. |

### 6.3 Composição de filtros (Home)

`NewHome.jsx` monta `activeWorkFilters` dinamicamente a partir de `selectedPolygon`, `selectedCropYear`, `selectedCrop`, `selectedFarm`, `selectedOperations`. O `viewMode` derivado (`logistics` | `works` | `complete`) controla:

- Quais queries são disparadas (`useWorksInfos` condicional a `shouldFetchWorks`).
- Como o total consolidado é composto (trabalho, logística ou ambos).
- Quais métricas ficam visíveis (velocidade/eficiência só têm sentido em `works`).

### 6.4 Métricas da tela Velocity

`DashboardMetrics.jsx` calcula, em cliente, a partir dos trabalhos selecionados:
- `totalDuration`, `totalCost`, `totalDistance`.
- `totalCorrectDuration`, `totalIncorrectDuration`.
- Conversões controladas por `preferences.distance_unit`, `velocity_unit`, `area_unit` (cada uma com `acronym` e `conversion_factor`).

---

## 7. Funcionalidades — catálogo completo

### 7.1 Cadastros (setup da fazenda)

- Empresas, unidades e preferências (km/mi, ha/alqueire, km/h/mph, R$).
- Fazendas, talhões (desenho de polígonos), culturas, safras, janelas operacionais.
- Máquinas, implementos, operadores — com custo/hora **por safra**.
- Tags RFID associadas a operadores/implementos.
- Destinatários de notificações (WhatsApp/email) por tipo.

### 7.2 Operação do hardware (Agribox)

- Gestão de lotes de fabricação e custo.
- Controle de versão de firmware ESP32 e software Raspberry Pi.
- Monitoramento em tempo real de saúde (GPS, rede, storage, servidor, ESP).
- Detecção automática de offline (job Celery a cada 20 min).
- Ordens de manutenção com custo e status.
- Logs de operação (uploads, USB, arquivo por sessão).

### 7.3 Coleta e processamento

- Ingestão autenticada por device.
- Sincronização incremental por módulo.
- Validação, deduplicação e suavização de RFID.
- Agrupamento em trabalhos e logísticas.
- Cálculo geoespacial de cobertura (buffer + clip).
- Classificação por velocidade e status do implemento.

### 7.4 Análises no Agri-Vision

- Mapa interativo com seleção múltipla de talhões.
- Filtros encadeados: safra → cultura → fazenda → talhão → operação.
- Alternância **R$** ↔ **R$/hora**.
- Pizza de custo por operação com fatia de logística.
- Rastro da máquina colorido por velocidade (polyline ou hotline).
- Slider de faixa de velocidade e histograma de frequência.
- Work Finder — busca avançada de trabalhos por N critérios.
- Telemetria ao vivo (gated em `agrisat`).

### 7.5 Exportação e integrações

- PDF de qualquer dashboard relevante (`ExportPdfProvider` + `html-to-image` + `@react-pdf/renderer`).
- Pré-visualização via `leaflet-easyprint`.
- Download direto via `downloadjs`.
- Notificações WhatsApp enviadas em lote diariamente.

---

## 8. Relatórios entregues ao produtor

### 8.1 Relatórios gerenciais (custo)

Todos disponíveis na interface e exportáveis em PDF:

- **Dashboard Geral da safra** — custo total, duração total, velocidade e eficiência médias, % de cobertura agregada, composição Máquina/Implemento/Operador, fatia de Logística × Trabalho.
- **Relatório por talhão** — custo/hectare, horas, operações realizadas, equipamentos e operadores envolvidos.
- **Relatório por máquina** — utilização, custo, horas produtivas × deslocamento, rendimento.
- **Relatório por implemento** — custo por hectare e participação por operação.
- **Relatório por operador** — produtividade, eficiência, custo gerado, comparativo.
- **Relatório de logística** — tempo e custo fora do talhão.

### 8.2 Relatórios operacionais (qualidade)

- **Mapa de velocidade por trabalho** — identifica trechos fora da faixa ideal.
- **Histograma de velocidade** — distribuição de tempo por velocidade.
- **Correct vs incorrect vs displacement** — quanto do tempo foi produtivo dentro da faixa correta.
- **Cobertura por talhão** — % real de área coberta pela trajetória do implemento.
- **Linha do tempo por polígono** — histórico cronológico de trabalhos.

### 8.3 Relatórios oficiais de área

- Gerados via `POST /bi/area/reports`, persistidos em `Report`.
- Seleção arbitrária de polígonos + período.
- Cálculo geoespacial em UTM (não apenas Mercator), com detalhamento por polígono, máquina, implemento e operador.
- Histórico consultável e reabertura em qualquer momento.

### 8.4 Relatórios de infraestrutura (Agribox)

- Saúde dos dispositivos por fazenda.
- Tempo offline acumulado (sem GPS, sem internet, sem servidor).
- Ordens de manutenção abertas/fechadas.
- Custo acumulado por lote.

---

## 9. Segurança, observabilidade e escalabilidade

- **Autenticação:** JWT (PyJWT) para usuários; token específico para devices (`requires_device_auth`); papéis `superadmin` e `agrisat`.
- **CORS** aberto a `*` com `expose_headers=['Authorization']` (a ser restringido em produção).
- **Observabilidade:** Sentry (`config_sentry`, `capture_exception_to_sentry`).
- **Banco:** pool de conexão tunado (`pool_size=10`, `max_overflow=20`, `pool_recycle=1800`, TCP keepalive ativo) — apropriado para workloads mistas de API + Celery.
- **Storage de arquivos:** Minio (S3-compatible), com `generate_presigned_url` para acesso temporário.
- **Processamento pesado em background:** Celery + Redis; Beat para jobs periódicos; locks via `extensions.task_lock` para evitar sobreposição.
- **Índices:** vários índices compostos em `coordinates` (inclusive `partial index` `postgresql_where='work_id IS NULL'`) e em `works` (datetime, status, polygon, cost, efficiency) para manter as queries do dashboard rápidas.

---

## 10. Fluxo ponta-a-ponta — um dia na fazenda

1. **05:30** — Operador liga o trator. Agribox inicializa ESP32 + RPi, obtém GPS (satélites, lat/lon), registra RFID do operador e do implemento, cria `AgriboxOperation`.
2. **Ao longo do dia** — A cada segundo, envia `Coordinate` (lat, lon, speed, datetime, operator_id, implement_id, machine_id, module_id). `AgriboxStatus` é atualizado com saúde do device.
3. **A cada 20 min** — O job `check_agribox_offline_status_task` verifica quem está offline e notifica.
4. **Upload** — Arquivos são sincronizados via `/collect/sync`; `StorageFile` registra status; `process_file_task` valida e persiste coordenadas.
5. **Noite** — Job `create_work_from_file` agrupa as coordenadas em `Work` (dentro de talhão) e `Logistics` (fora). Calcula `duration`, `cost`, `coverage_geom`, `coverage_percentage`, velocidades, classificação por ponto.
6. **09:00 do dia seguinte** — `create_recipient_work_tasks` envia resumo por WhatsApp aos destinatários.
7. **Manhã** — Produtor abre o Agri-Vision em `/home`: filtra safra atual, vê custo total, seleciona o talhão que parece caro, entra em `/velocity`, vê o rastro em vermelho nos trechos em que o operador andou rápido demais.
8. **Fim do mês** — Gera um relatório de área em `/area` para o conjunto de talhões da fazenda X no período, exporta o PDF e arquiva.

---

## 11. Pontos de evolução e extensibilidade

- **Multi-tenant** já suportado via `company_id` em quase todos os modelos.
- **Novas janelas operacionais** e tipos de implemento são cadastráveis (`Window` + `TypeImplementWindow`) sem mudança de código.
- **Custos versionados por safra** evitam recalcular histórico quando tabelas de custo mudam.
- **Geometria** armazenada em SRID 4326 + conversão on-demand para UTM deixa o sistema pronto para múltiplas regiões geográficas.
- **Celery Beat** é o ponto único para adicionar novos jobs (relatórios automáticos, alertas, integrações ERP).
- **SocketIO** já está presente no código (comentado) como caminho futuro para streaming em tempo real no `/live`.

---

## 12. Resumo executivo

| Pergunta do produtor | Onde o Agrifence responde |
|---|---|
| Quanto custou a safra? | `/home` + filtros safra/cultura. |
| Quanto custou cada talhão? | `/home` com seleção de polígono + `/area` PDF. |
| Quem trabalhou melhor? | `/operator`, `/machine`, `/implement`. |
| Onde perdi tempo/combustível? | `/logistics` + `/velocity` (tempo incorrect/displacement). |
| A aplicação foi feita na velocidade certa? | `/velocity` (rastro colorido, histograma). |
| O talhão foi todo coberto? | `coverage_percentage` em cada `Work` + `/home`. |
| O que está acontecendo agora? | `/live` (Agrisat). |
| Meus equipamentos estão saudáveis? | Gestão Agribox (status, operation, maintenance). |
| Tenho prova do que foi feito? | `Report` persistido + PDF em `/area`. |

O Agrifence transforma **coordenadas GPS** em **decisão econômica** — com rastreabilidade, multi-empresa, processamento geoespacial sério (PostGIS + UTM) e uma interface que fala a língua do produtor rural.
