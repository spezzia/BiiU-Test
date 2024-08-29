import Link from 'next/link';
import { IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import CartItemsNavigation from '../atoms/CartItemsNavigation';
import PathName from '../atoms/PathNav';

export default function Navbar() {
  return (
    <nav className='w-full py-6 px-10 sticky top-0 bg-white z-50 flex items-center justify-between webkit-sticky border-b-2 border-bgImageProduct'>
      <PathName href='/' path='Home' />
      <div className='flex flex-row gap-5'>
        <IoSearchOutline className='text-[25px] text-iconPrimary' />
        <IoPersonOutline className='text-[25px] text-iconPrimary' />
        <CartItemsNavigation />
      </div>
    </nav>
  );
}
