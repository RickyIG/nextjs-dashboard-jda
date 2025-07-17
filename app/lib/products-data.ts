// lib/products-data.ts
export type Product = {
  id: number
  name: string
  price: number
}

export let products: Product[] = [
  { id: 1, name: "Laptop (Contoh Data)", price: 10000000 },
  { id: 2, name: "Keyboard (Contoh Data)", price: 500000 },
]
