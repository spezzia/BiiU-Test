'use client';

import { GetProducts } from '@/api/project/products';
import { TypeProduct } from '@/app/page';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';

const numOfItems = 20;

interface AddMoreProductsProps {
  products: number;
  setAllProducts: Dispatch<SetStateAction<TypeProduct[]>>;
}

export default function AddMoreProducts({
  products,
  setAllProducts,
}: AddMoreProductsProps) {
  const handleGetProducts = async () => {
    try {
      if (products === numOfItems) {
        return;
      }
      const response = await GetProducts<TypeProduct[]>(products + 10);
      const toastId = toast.loading('Loading...');
      if (Array.isArray(response)) {
        toast.dismiss(toastId);
        setAllProducts([...response]);
      } else {
        toast.error('Error loading more products. Please try again later.');
      }
    } catch (error) {
      toast.error('Error loading more products. Please try again later.');
    }
  };

  if (products === numOfItems) {
    return null;
  }

  return (
    <button
      className='bg-buttonDark w-fit h-fit px-4 py-2 rounded-lg hover:opacity-80'
      onClick={handleGetProducts}
      aria-label='Load more products'
    >
      <p className='font-outfit font-semibold text-white text-[16px]'>
        Load more products
      </p>
    </button>
  );
}
