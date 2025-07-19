import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Ambil semua pengguna
export async function GET() {
  const data = await prisma.pengguna.findMany({
    orderBy: { dibuat: "desc" },
  });
  return NextResponse.json(data);
}

// POST: Tambah pengguna baru
export async function POST(req: Request) {
  const body = await req.json();
  const newPengguna = await prisma.pengguna.create({ data: body });
  return NextResponse.json(newPengguna);
}
