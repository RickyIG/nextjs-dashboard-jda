'use client';

export default function Error() {
    console.log("Error");
    return (
        <main className="flex min-h-screen flex-col p-6">
            <h1>Error</h1>
            <p>Something went wrong. Please try again later.</p>
        </main>
    );
}