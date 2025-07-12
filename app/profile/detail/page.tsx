import Link from "next/link";

export default async function Page(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    const profileId = "1"; // Ganti dengan id yang sesuai atau dapatkan dari data
    // Misalnya, bisa diambil dari props atau state jika menggunakan React hooks
    return(
        <main>
            <h1>Profile Detail Page</h1>
            <Link href={`/profile/detail/${profileId}`} className="text-blue-600 no-underline hover:underline hover:text-blue-800 transition">
                Go to Profile Detail Page
            </Link>
        </main>
    )
}