import TitlePage from '@/components/atoms/TitlePage';
import ListCardProducts from '@/components/organisms/ListCartProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
};

export default function PageCart() {
  return (
    <main className='w-full'>
      <TitlePage label='Shopping cart' />
      <div className='h-[40px]' />
      <ListCardProducts />
    </main>
  );
}
