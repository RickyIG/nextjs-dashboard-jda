import { notFound } from 'next/navigation';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  images: string[];
};

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`, {
    next: { revalidate: 60 }, // ISR: revalidate setiap 60 detik
  });

  if (!res.ok) return notFound();

  const product: Product = await res.json();

  return (
    <div className="p-8 flex flex-col min-h-screen justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img src={product.images?.[0]} alt={product.title} className="w-64 h-64 object-cover mb-4 rounded" />
        <p className="text-lg text-gray-600 mb-2">💰 ${product.price}</p>
        <p className="text-md text-gray-700 mb-4">{product.description}</p>
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {product.category.name}
        </span>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/product" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition">
          Back to Products
        </Link>
      </div>
    </div>
  );
}
