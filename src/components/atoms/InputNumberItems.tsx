import {
  ProductActionKind,
  useCartShop,
} from '@/context/CartShop/CartShopContext';
import { FormEvent } from 'react';

interface InputNumberItemsProps {
  defaultValue: number;
  idProduct: number;
}

export default function InputNumberItems({
  defaultValue,
  idProduct,
}: InputNumberItemsProps) {
  const { products, actionProduct } = useCartShop();

  const validNumberItems = (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    let valueNum = Number(value.replaceAll(/[^0-9]/g, ''));
    if (!isNaN(valueNum)) {
      if (valueNum < 100) {
        e.currentTarget.value = `${valueNum}`;
        return;
      }
      e.currentTarget.value = `99`;
    } else {
      e.currentTarget.value = '';
    }
  };

  const updateProduct = (e: FormEvent<HTMLInputElement>) => {
    let prod = products.find((prod) => prod.productId === idProduct);
    if (prod !== undefined) {
      prod = {
        ...prod,
        quantity: Number(e.currentTarget.value),
      };
      actionProduct({ type: ProductActionKind.update, product: prod });
    }
  };

  return (
    <div className='w-[68px] border-[1px] border-borderPrimary rounded-[5px] p-1'>
      <input
        defaultValue={defaultValue}
        onInput={validNumberItems}
        min={0}
        max={100}
        type='number'
        onBlur={updateProduct}
        className='w-full focus:outline-none font-outfit text-[20px] px-2'
      />
    </div>
  );
}
