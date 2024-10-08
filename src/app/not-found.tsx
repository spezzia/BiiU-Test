import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { TbError404 } from 'react-icons/tb';

export default function NotFoundPage() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <TbError404 className='text-[120px] text-[#94A3B8]' />
      <div className='h-[50px]' />
      <p className='font-outfit font-semibold text-[18px] lg:text-[30px] text-black text-center'>
        We couldn’t find the page you’re looking for. Maybe it’s moved or no
        longer exists. Let’s get you back on track!
      </p>
      <div className='h-[50px]' />
      <Link href='/'>
        <p className='font-outfit font-normal text-[16px] lg:text-[20px] text-black text-center underline'>
          Go home
        </p>
      </Link>
    </div>
  );
}
