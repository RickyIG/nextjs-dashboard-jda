import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/components/header';
// import Footer from '@/components/footer'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      {/* <body style={{ fontFamily: 'Roboto' }}>{children}</body> */}
      <body className={`${inter.className} antialiased font-serif`}>
        <Header />
        {children}
      </body>
    </html>
  );
}