import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export default async function HomePage() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12', {
    next: { revalidate: 60 },
  });

  const products: Product[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">🛍️ Product Showcase</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600 mb-3">💵 ${product.price}</p>
              <Link
                href={`/product/${product.id}`}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
