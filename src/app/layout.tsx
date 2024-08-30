import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { CartShopProvider, Product } from '@/context/CartShop/CartShopContext';
import Navbar from '@/components/organisms/Navbar';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { UserContextProvider } from '@/context/User/UserContext';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: {
    template: '%s | BiiU - Shop',
    default: 'BiiU - Shop',
  },
  description: 'BiiU - Shop Font End Test',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${outfit.variable}`}>
      <body className='w-full bg-white px-0'>
        <UserContextProvider>
          <CartShopProvider>
            <Navbar />
            {children}
          </CartShopProvider>
          <Toaster position='bottom-center' reverseOrder={false} />
        </UserContextProvider>
      </body>
    </html>
  );
}
