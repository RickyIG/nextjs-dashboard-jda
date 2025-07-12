export default function Layout({children}: {children: React.ReactNode}) {
    console.log('Profile Layout');
    return (
        <main className="flex min-h-screen flex-col p-6">
            <h1>Layout</h1>
            { children }
        </main>
    );
}