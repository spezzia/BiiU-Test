import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function NoProductsCart() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <IoCartOutline className='text-[120px] text-textDisable' />
      <div className='h-[50px]' />
      <p className='font-outfit font-semibold text-[18px] lg:text-[25px] text-black text-center'>
        It looks like you haven’t selected any products yet. Feel free to browse
        and add items to your cart!
      </p>
      <div className='h-[50px]' />
      <Link href='/'>
        <p className='font-outfit font-normal text-[16px] lg:text-[20px] text-black text-center underline'>
          Go shopping
        </p>
      </Link>
    </div>
  );
}
