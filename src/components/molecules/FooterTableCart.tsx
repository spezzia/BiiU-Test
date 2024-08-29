'use client';

import { useCartShop } from '@/context/CartShop/CartShopContext';
import ButtonCheckout from '../atoms/ButtonCheckout';
import { TransformNumberToPriceFormat } from '@/utils/numberUtils';

export default function FooterTableCart() {
  const { totalAmount } = useCartShop();

  return (
    <div className='w-full flex flex-nowrap gap-5 items-center'>
      <div className='hidden lg:w-1/2 lg:flex items-center'></div>
      <div className='w-full lg:w-1/2 flex justify-end flex-wrap'>
        <div className='w-full flex justify-between sm:justify-center'>
          <div className='w-fit pr-5 flex justify-start sm:justify-center'>
            <p
              className={
                'font-outfit text-textDisable text-[20px] sm:text-[24px] lg:text-[30px] font-normal '
              }
            >
              Total:
            </p>
          </div>
          <div className='w-fit flex justify-center'>
            <p
              className={
                'font-outfit text-textDark text-[20px] sm:text-[24px] lg:text-[30px] font-semibold'
              }
            >
              {TransformNumberToPriceFormat(totalAmount)}
            </p>
          </div>
        </div>
        <div className='w-full mt-5'>
          <ButtonCheckout />
        </div>
      </div>
    </div>
  );
}
