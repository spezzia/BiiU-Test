'use client';

import { useCartShop } from '@/context/CartShop/CartShopContext';
import { useUserContext } from '@/context/User/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoCartOutline } from 'react-icons/io5';

export default function CartItemsNavigation() {
  const router = useRouter();

  const { products } = useCartShop();
  const { isAuthenticated } = useUserContext();

  const handleGoCart = () => {
    if (!isAuthenticated) {
      toast.error('You must be logged in to do this action.');
      return;
    }
    router.push('/cart');
  };

  return (
    <button onClick={handleGoCart} className='relative'>
      <IoCartOutline className='text-[25px] text-[#94A3B8]' />
      {products.length > 0 && (
        <div className='absolute w-[15px] h-[15px] rounded-full bg-bgBadge flex justify-center items-center -top-2 -right-2'>
          <p className='text-[10px] font-outfit text-white font-semibold'>
            {products.length}
          </p>
        </div>
      )}
    </button>
  );
}
