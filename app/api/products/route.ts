import { NextResponse } from 'next/server'
import { products, Product } from '@/app/lib/products-data'

// GET: Ambil semua produk
export async function GET() {
  return NextResponse.json(products)
}

// POST: Tambah produk baru dengan auto-increment id
export async function POST(req: Request) {
  const body = await req.json()

  const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0

  const newProduct: Product = {
    id: maxId + 1, // auto-increment ID
    name: body.name,
    price: body.price,
  }

  products.push(newProduct)
  return NextResponse.json(newProduct)
}

// PUT: Update produk berdasarkan id
export async function PUT(req: Request) {
  const body = await req.json()
  const index = products.findIndex(p => p.id === body.id)

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  products[index] = {
    ...products[index],
    name: body.name,
    price: body.price,
  }

  return NextResponse.json(products[index])
}

// DELETE: Hapus produk berdasarkan id
export async function DELETE(req: Request) {
  const body = await req.json()
  const index = products.findIndex(p => p.id === body.id)

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const removed = products.splice(index, 1)[0]
  return NextResponse.json(removed)
}
