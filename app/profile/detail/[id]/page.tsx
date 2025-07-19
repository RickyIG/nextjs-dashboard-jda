"use client";

import { use, useState } from 'react';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const [count, setCount] = useState(0);

    return (
        <main>
            <h1>Profile Detail Page</h1>
            <p>This is the detail page for a specific profile with id: {id}.</p>
            <p>Count: {count}</p>
            <div className="flex gap-3 mb-4">
                <Link href="/" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                    Kembali ke Home
                </Link>
                <Link href="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Kembali ke Dashboard
                </Link>
            </div>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Increment Count
            </button>
        </main>
    );
}
