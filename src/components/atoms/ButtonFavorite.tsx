'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface ButtonFavoriteProps {
  className?: string;
}

export default function ButtonFavorite({ className }: ButtonFavoriteProps) {
  const [fav, setIsFav] = useState<boolean>(false);

  return (
    <button
      type='button'
      className={`w-[25px] h-[25px] md:w-[35px] md:h-[35px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:opacity-90 ${className}`}
      onClick={(e) => {
        setIsFav(!fav);
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      aria-label='Favorite button'
    >
      {fav ? (
        <FaHeart className='text-[15px] md:text-[20px] text-[#EB6383]' />
      ) : (
        <FaRegHeart className='text-[15px] md:text-[20px] text-[#FFFFFF]' />
      )}
    </button>
  );
}
