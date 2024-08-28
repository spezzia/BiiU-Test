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
        className='bg-[#EB6383] rounded-[30px] flex justify-center items-center py-3 w-full hover:bg-[#EB6383]/40'
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
      className='bg-[#059669] rounded-[30px] flex justify-center items-center py-3 w-full hover:opacity-70'
    >
      <p className='font-outfit font-semibold text-[18px] sm:text-[20px] text-white'>
        + Add to cart
      </p>
    </button>
  );
}
