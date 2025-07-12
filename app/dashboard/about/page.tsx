import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description: "Tentang aplikasi ini dan pengembangnya",
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { use } from "react"

export default function AboutPage() {
  return (
    <div className="grid items-start gap-6 px-4 py-8 md:px-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Tentang Kami</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            Ini adalah dashboard berbasis Next.js yang dirancang dengan prinsip clean design dan
            efisiensi, menggunakan Tailwind CSS dan shadcn/ui. Template ini cocok untuk pengelolaan data,
            analitik, dan aplikasi internal modern.
          </p>
          <p>
            Dibuat dan dikembangkan oleh:
            <br />
            <span className="text-foreground font-medium">
              Ricky Indra Gunawan
            </span>
          </p>
          <p>
            Terinspirasi dari template <strong>Acme Dashboard</strong> oleh Vercel, halaman ini merupakan bagian dari upaya
            membangun sistem manajemen modern berbasis React & Next.js.
          </p>
        </CardContent>

        <CardContent className="space-y-4 text-sm text-muted-foreground">

            <Link href="/dashboard" passHref>
                <Button variant="outline">⬅ Kembali ke Dashboard</Button>
            </Link>
        </CardContent>
      </Card>
    </div>
  )
}
