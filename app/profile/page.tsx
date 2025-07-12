import Link from "next/link";

export default function Page() {
    console.log("Profile Page");
    return (
        <main>
            <h1 className="font-serif">Profile Page</h1>
            <Link href={`/profile/detail`} className="text-blue-600 no-underline hover:underline hover:text-blue-800 transition">
                Go to Profile Detail Page
            </Link>
        </main>
    );
}