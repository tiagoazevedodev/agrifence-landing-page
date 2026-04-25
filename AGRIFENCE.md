# Agrifence — Gestão Inteligente da Operação Agrícola

> Visão geral do sistema **Agrifence**, escrita sob a ótica do **produtor rural** e da **plataforma**: o que a ferramenta acompanha no campo, como ela transforma telemetria em decisão, e quais relatórios entrega para reduzir custo, aumentar eficiência e dar rastreabilidade a cada hectare trabalhado.

---

## 1. O que é o Agrifence

O Agrifence é uma plataforma de **monitoramento e inteligência operacional para fazendas**. Na prática, ele conecta os equipamentos do produtor (tratores, colhedoras, pulverizadores, implementos e operadores) a uma camada digital que registra, em tempo real, **tudo que acontece dentro da porteira**: onde cada máquina está, o que ela está fazendo, quanto tempo leva, quanto custa, quanto combustível consome e qual a qualidade do serviço executado em cada talhão.

A espinha dorsal da coleta é o dispositivo **Agribox**, um hardware embarcado instalado nas máquinas que envia coordenadas, velocidade, status operacional e eventos para a nuvem. Esses dados alimentam painéis e relatórios acessados pelo produtor no navegador — o **Agri-Vision**, a interface web do sistema.

### Para o produtor, o Agrifence responde a perguntas simples, porém caras:

- Quanto custou essa safra, por operação, por talhão e por hectare?
- Qual máquina e qual operador renderam mais?
- Onde foi perdido tempo, combustível ou cobertura?
- A aplicação/plantio/colheita foi feita na velocidade certa, no lugar certo, na hora certa?
- Quanto da minha operação é **trabalho produtivo** e quanto é **logística** (deslocamento, manobra, espera)?

---

## 2. O que o Agrifence monitora

### 2.1 Infraestrutura e cadastro da fazenda

- **Fazendas (Fencings)** — propriedades e cercas virtuais (geofencing) que delimitam onde vale a operação.
- **Talhões (Polygons)** — cada área desenhada no mapa, com cultura, safra e histórico associados.
- **Culturas (Crops)** e **Safras (Harvests)** — vínculo de cada talhão à cultura e ao ciclo produtivo.
- **Janelas operacionais (Windows)** — o que pode/deve ser feito em cada cultura (plantio, pulverização, colheita, etc.) e com quais tipos de implemento.

### 2.2 Frota e pessoas

- **Máquinas (Machines)** — tratores, colhedoras, pulverizadores, caminhões. Cada uma com seu custo/hora, consumo e histórico.
- **Implementos (Implements)** — plantadeiras, grades, pulverizadores, plataformas etc., com tipo, largura de trabalho e custo.
- **Operadores (Operators)** — cadastro com custo/hora e vínculo a RFID, permitindo saber **quem** estava em qual máquina.
- **Custos de máquina, implemento e operador** — versionados para calcular o custo real de cada operação.

### 2.3 Dispositivo embarcado — Agribox

A plataforma gerencia o ciclo de vida completo do hardware:

- **Fabricação, lote, status e armazenamento** dos dispositivos.
- **Operação em campo** (vinculação à máquina, status online/offline).
- **Métricas do equipamento** (saúde, conectividade).
- **Manutenções** programadas e corretivas.

### 2.4 Telemetria bruta

- **Coordenadas GPS** ponto a ponto (latitude, longitude, velocidade, horário).
- **Identificação do operador via RFID** na cabine.
- **Sinal de implemento ligado/desligado** (trabalho efetivo × deslocamento).
- **Arquivos de coleta** (uploads de dados do Agribox, processados em sections).

### 2.5 Trabalho (Work) e Logística

O sistema separa automaticamente cada atividade em dois tipos:

- **Trabalho (Work)** — operação produtiva dentro do talhão (ex.: plantio no polígono X).
- **Logística (Logistics)** — deslocamentos, manobras, abastecimento, espera. É custo, mas não é produção.

Essa separação é o coração do Agrifence: o produtor enxerga **claramente onde o dinheiro está sendo queimado fora do talhão**.

---

## 3. Funcionalidades — os painéis do Agri-Vision

A interface é organizada em dois grandes grupos: **Relatórios de Custo** (visão gerencial) e **Operacional** (visão do que está/esteve acontecendo).

### 3.1 Dashboard Geral (Home)

Mapa da fazenda com todos os talhões + painel lateral de síntese. Permite:

- Filtrar por **safra, cultura, fazenda e talhão** (seleção livre no mapa).
- Ver, para o recorte escolhido:
  - **Custo total** (R$), **duração total** (horas), **velocidade média**, **eficiência média**, **% de cobertura**.
  - **Composição do custo** entre Máquina, Implemento e Operador.
  - Fatia da operação que é **Logística** vs. **Trabalho produtivo**.
  - Distribuição por **tipo de operação** (plantio, pulverização, colheita…).
- Alternar métricas em **R$** ou **R$/hora** para comparação.
- Exportar a visão como **PDF** (relatório gerencial pronto para impressão).

### 3.2 Dashboard de Máquinas

Ranking e comparação entre máquinas da frota:

- Horas trabalhadas vs. horas em deslocamento.
- Custo por máquina e custo/hora.
- Área coberta por máquina.
- Participação de cada máquina em cada tipo de operação.

### 3.3 Dashboard de Implementos

Mesma lógica aplicada aos implementos: qual plantadeira, qual pulverizador, qual grade teve mais uso, melhor rendimento e menor custo por hectare.

### 3.4 Dashboard de Operadores

Produtividade e custo por operador:

- Horas efetivas na operação.
- Velocidade média e eficiência.
- Custo atribuído.
- Comparação lado a lado entre a equipe.

### 3.5 Trabalhos (Velocity)

Visão detalhada de **cada trabalho executado**, no mapa:

- **Rastro da máquina colorido pela velocidade** (linhas coloridas ou modo “hotline”).
- **Filtro por faixa de velocidade** — rapidamente se vê onde o operador passou rápido ou devagar demais.
- **Histograma de frequência de velocidades** do trabalho.
- Métricas do trabalho selecionado: duração, distância, custo, área coberta, eficiência, tempo correto vs. incorreto.
- Busca avançada de trabalhos (Work Finder) por período, talhão, operação, máquina, implemento ou operador.
- Exportação em PDF do trabalho específico.

### 3.6 Tempo (Time)

Análise temporal da operação talhão a talhão — quanto tempo cada talhão levou, janelas de trabalho, sobreposições, intervalos. Clicando em um polígono, o produtor vê o histórico de trabalhos realizados ali.

### 3.7 Área

Geração de **relatórios oficiais de área** por período e conjunto de polígonos:

- Cálculo geoespacial preciso (em UTM) da área efetivamente trabalhada.
- Detalhamento por máquina, implemento, operador e polígono.
- Armazenamento do relatório no histórico (pode ser reaberto, baixado e comparado).

### 3.8 Logística

Painel dedicado a tudo que **não é trabalho produtivo**:

- Tempo e custo de deslocamento da frota.
- Métricas específicas de logística (duração, custo total).
- Mapa com os trajetos logísticos em destaque.

### 3.9 Telemetria Ao Vivo (Live)

Disponível para clientes com o módulo **Agrisat**:

- Posição **em tempo real** de cada máquina no mapa.
- Status (em trabalho, em deslocamento, parada).
- Velocidade e operador atuais.
- Visão de comando para tomadas de decisão imediatas durante o dia.

### 3.10 Exportação e preferências

- Qualquer painel relevante pode ser **exportado em PDF** com identidade visual do produtor.
- O produtor define **unidades preferidas** (hectare/alqueire, km/h, km, R$) e o sistema converte automaticamente.

---

## 4. Relatórios entregues ao produtor

O Agrifence entrega relatórios em **três camadas**, atendendo desde o gerente da fazenda até o agrônomo de campo:

### 4.1 Relatórios de custo (gerenciais)

- **Relatório geral da safra** — custo total, horas, área e eficiência da safra, com quebra por operação.
- **Relatório por talhão** — quanto custou aquele talhão, quantas horas levou, qual foi o custo por hectare, quais máquinas e operadores passaram.
- **Relatório por máquina** — utilização, custo, horas produtivas × logísticas, rendimento médio.
- **Relatório por implemento** — performance e custo por implemento, cruzado com tipo de operação.
- **Relatório por operador** — desempenho individual, horas, eficiência e custo gerado.
- **Relatório de logística** — o quanto a fazenda gasta fora do talhão (deslocamento, manobra, espera).

### 4.2 Relatórios operacionais (qualidade da execução)

- **Relatório de velocidade** — faixas de velocidade utilizadas, desvio em relação ao ideal da operação, mapa de calor por velocidade.
- **Relatório de cobertura** — % do talhão efetivamente coberto, falhas e sobreposições.
- **Relatório de duração correta vs. incorreta** — tempo dentro do padrão esperado vs. tempo fora do padrão.
- **Histórico de trabalhos por polígono** — linha do tempo do que foi feito em cada talhão.

### 4.3 Relatórios de área (oficiais/geoespaciais)

- Cálculo assinado de **área trabalhada por período**, com detalhamento por polígono, máquina, implemento e operador. Serve como comprovação interna e base para acertos com prestadores de serviço.

### 4.4 Formatos e uso

- **Online interativo** — filtros dinâmicos, clique no mapa, drill-down.
- **PDF exportável** — para arquivamento, envio ao contador, ao parceiro ou ao banco.
- **Histórico persistente** — relatórios ficam salvos na plataforma para consulta futura e comparação safra a safra.

---

## 5. Por que isso importa para o produtor rural

1. **Você passa a saber o custo real por hectare**, não a média da fazenda.
2. **Identifica desperdício** — o combustível gasto em logística, a hora parada, o operador fora da faixa de velocidade.
3. **Compara equipamentos e pessoas com dados**, não com achismo.
4. **Ganha rastreabilidade** — toda operação tem registro de quem, onde, quando, em qual velocidade e a que custo.
5. **Toma decisão no mesmo dia** via telemetria ao vivo, em vez de descobrir o problema no fechamento da safra.
6. **Documenta a safra** com relatórios prontos para banco, auditoria, certificação e fechamento contábil.

Em resumo, o Agrifence transforma o **movimento das máquinas** em **informação de gestão**, e a informação em **decisão que protege a margem da fazenda**.
