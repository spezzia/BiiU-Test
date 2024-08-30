import Link from 'next/link';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function NoAccess() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <IoIosCloseCircleOutline className='text-[120px] text-textDisable' />
      <div className='h-[50px]' />
      <p className='font-outfit font-semibold text-[18px] lg:text-[25px] text-black text-center'>
        You must be logged in to access this page
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
