"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DiscoverContact() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#4c84ff] hover:bg-[#3a70e0] text-white font-semibold px-6 py-3 rounded-full transition duration-300">
          Descubra o Futuro
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#4c84ff] text-2xl font-bold">Descubra o Futuro</DialogTitle>
          <DialogDescription className="text-gray-600">
            Descubra como a AgriFence pode revolucionar sua gestão agrícola.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            asChild
            onClick={() => setOpen(false)}
            className="bg-[#4c84ff] hover:bg-[#3a70e0] text-white font-semibold"
          >
            <Link href="https://wa.me/555399641056" target="_blank" className="w-full">
              Contate o Fundador
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

