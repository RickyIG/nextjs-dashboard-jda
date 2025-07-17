'use client'

import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [editId, setEditId] = useState<number | null>(null)

  async function fetchProducts() {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const product = { name, price: Number(price) }

    if (editId) {
      await fetch('/api/products', {
        method: 'PUT',
        body: JSON.stringify({ id: editId, ...product }),
      })
      setEditId(null)
    } else {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
      })
    }

    setName('')
    setPrice('')
    fetchProducts()
  }

  async function handleDelete(id: number) {
    await fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })
    fetchProducts()
  }

  function handleEdit(p: Product) {
    setEditId(p.id)
    setName(p.name)
    setPrice(p.price.toString())
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product List</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      {/* Table */}
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">Rp {p.price.toLocaleString()}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
