'use client';

import { useCartShop } from '@/context/CartShop/CartShopContext';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function CartItemsNavigation() {
  const { products } = useCartShop();

  return (
    <Link href={'/cart'} className='relative'>
      <IoCartOutline className='text-[25px] text-[#94A3B8]' />
      {products.length > 0 && (
        <div className='absolute w-[15px] h-[15px] rounded-full bg-bgBadge flex justify-center items-center -top-2 -right-2'>
          <p className='text-[10px] font-outfit text-white font-semibold'>
            {products.length}
          </p>
        </div>
      )}
    </Link>
  );
}
