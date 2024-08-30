'use client';
import { LogOut } from '@/api/project/auth';
import {
  ProductActionKind,
  useCartShop,
} from '@/context/CartShop/CartShopContext';
import { useUserContext } from '@/context/User/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoMdLogOut } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';

export default function UserIconNavigation() {
  const { actionProduct } = useCartShop();
  const { isAuthenticated, setIsAuthenticated } = useUserContext();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      let response = await LogOut();
      const idToast = toast.loading('Loading...');
      if (response) {
        toast.dismiss(idToast);
        toast.success('See you soon!');
        actionProduct({
          type: ProductActionKind.deleteAll,
          product: {
            productId: 0,
            quantity: 0,
            image: '',
            name: '',
            price: 0,
          },
        });
        setIsAuthenticated(false);
        router.replace('/');
      } else {
        toast.error('Logout failed. Please try again.');
      }
    } catch (error) {}
  };

  if (isAuthenticated) {
    return (
      <button
        type='button'
        onClick={() => {
          handleLogOut();
        }}
      >
        <IoMdLogOut className='text-[25px] text-iconPrimary' />
      </button>
    );
  }

  return (
    <Link href={'/login'} className='relative'>
      <IoPersonOutline className='text-[25px] text-iconPrimary' />
    </Link>
  );
}
