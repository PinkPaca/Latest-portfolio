import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Rucy:Portfolio',
  description: 'Welcome 😊',
  icons: {
    icon: '/portfolio_thumbnail.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-basic-color">
      <Head>
        <link rel="icon" type="image/png" href="/portfolio-thumbnail.png" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
