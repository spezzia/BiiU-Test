'use client';

import { TypeProduct } from '@/app/page';
import {
  ProductActionKind,
  useCartShop,
} from '@/context/CartShop/CartShopContext';
import toast from 'react-hot-toast';

interface AddToCardProps {
  product: TypeProduct;
}

export default function AddToCard({ product }: AddToCardProps) {
  const { products, actionProduct } = useCartShop();

  const handleAddProduct = () => {
    actionProduct({
      type: ProductActionKind.add,
      product: {
        productId: product.id,
        quantity: 1,
        image: product.image,
        price: product.price,
        name: product.title,
      },
    });
    toast.success('The product was added');
  };

  const handleDeleteProduct = () => {
    actionProduct({
      type: ProductActionKind.remove,
      product: {
        productId: product.id,
        quantity: 1,
        image: product.image,
        price: product.price,
        name: product.title,
      },
    });
    toast.success('The product was deleted');
  };

  if (products.some((prod) => prod.productId === product.id)) {
    return (
      <button
        onClick={handleDeleteProduct}
        className='bg-buttonSecondary rounded-[30px] flex justify-center items-center py-3 w-full hover:bg-buttonSecondary/40'
        aria-label='Delete product'
      >
        <p className='font-outfit font-semibold text-[18px] sm:text-[20px] text-white'>
          Delete product
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddProduct}
      className='bg-buttonPrimary rounded-[30px] flex justify-center items-center py-3 w-full hover:opacity-70'
      aria-label='Add product'
    >
      <p className='font-outfit font-semibold text-[18px] sm:text-[20px] text-white'>
        + Add to cart
      </p>
    </button>
  );
}
