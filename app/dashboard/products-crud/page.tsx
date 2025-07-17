'use client'

import { useState, useEffect } from 'react'

type Product = { id: number; name: string; price: number }

export default function ProductCrudPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [editId, setEditId] = useState<number | null>(null)

  async function fetchData() {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => { fetchData() }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { name, price: Number(price) }

    if (editId) {
      await fetch('/api/products', {
        method: 'PUT',
        body: JSON.stringify({ id: editId, ...payload }),
      })
      setEditId(null)
    } else {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
    }

    setName('')
    setPrice('')
    fetchData()
  }

  async function handleDelete(id: number) {
    await fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })
    fetchData()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk (CRUD) [Array Static & Non-DB]</h1>
      <p>Tugas Pertemuan Keempat</p>

      <form onSubmit={handleSubmit} className="mb-6">
        <input type="text" placeholder="Nama" value={name} required
          onChange={e => setName(e.target.value)} className="border p-2 mr-2" />
        <input type="number" placeholder="Harga" value={price} required
          onChange={e => setPrice(e.target.value)} className="border p-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Tambah'}
        </button>
      </form>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Harga</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">Rp {p.price.toLocaleString()}</td>
              <td className="border px-4 py-2 space-x-2">
                <button onClick={() => {
                  setEditId(p.id)
                  setName(p.name)
                  setPrice(p.price.toString())
                }} className="text-blue-500">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="text-red-500">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
