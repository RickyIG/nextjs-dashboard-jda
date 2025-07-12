"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12 text-center">
      {/* <h1 className="text-6xl font-bold text-foreground tracking-tight">404</h1> */}
      <h1 className="text-6xl font-extrabold text-foreground">🚧 404 🚧</h1>
      <p className="text-muted-foreground">Kayaknya kamu nyasar 😅</p>
      <p className="mt-4 text-lg text-muted-foreground">Ups! Halaman yang kamu cari tidak ditemukan.</p>
      <p className="mb-6 text-sm text-muted-foreground">Mungkin jalannya salah, atau halaman sudah tidak tersedia.</p>

      <Link href="/">
        <Button variant="outline">Kembali ke Beranda</Button>
      </Link>

      <div className="mt-10 text-xs text-muted-foreground">
        Dibuat dengan ❤️ oleh Ricky Indra Gunawan
      </div>
    </main>
  )
}
