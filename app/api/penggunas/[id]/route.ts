import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = { params: { id: string } };

// GET: Ambil detail pengguna
export async function GET(_: Request, { params }: Params) {
  const pengguna = await prisma.pengguna.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(pengguna);
}

// PUT: Update pengguna
export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.pengguna.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json(updated);
}

// DELETE: Hapus pengguna
export async function DELETE(_: Request, { params }: Params) {
  await prisma.pengguna.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ deleted: true });
}
