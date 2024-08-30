import { TransformNumberToPriceFormat } from '@/utils/numberUtils';
import ImageProduct from '../atoms/ImageProduct';
import { FaRegTrashAlt } from 'react-icons/fa';
import ButtonDeleteProduct from '../atoms/ButtonDeleteProduct';
import InputNumberItems from '../atoms/InputNumberItems';
import Divider from '../atoms/Divider';

interface RowTableCartProps {
  id: number;
  url: string;
  productName: string;
  price: number;
  quantity: number;
}

export default function RowTableCart({
  id,
  url,
  productName,
  price,
  quantity,
}: RowTableCartProps) {
  const headersClassName =
    'block font-outfit font-normal  text-[16px] sm:text-[18px] lg:text-[20px] text-black lg:hidden';

  return (
    <>
      <Divider className='mb-5 mt-5 h-[1px]' />
      <div className='w-full flex flex-wrap lg:flex-nowrap gap-5 items-center'>
        <div className='w-full mb-5 lg:mb-0 lg:w-1/2 gap-5 flex lg:items-center'>
          <div className='w-1/2 sm:w-1/3 aspect-square md:aspect-auto md:w-[121px] md:h-[121px] relative'>
            <ImageProduct
              url={url}
              alt={productName}
              className='rounded-[10px] bg-white p-1 border-[2px] border-bgImageProduct'
            />
          </div>
          <div className='flex-1'>
            <p className='font-outfit font-semibold text-[18px] sm:text-[20px] lg:text-[24px] text-black line-clamp-2  lg:line-clamp-1'>
              {productName}
            </p>
            <p className='lg:hidden mt-4 font-outfit font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-black'>
              {TransformNumberToPriceFormat(price)}
            </p>
            <div className='lg:hidden mt-4'>
              <ButtonDeleteProduct id={id} />
            </div>
          </div>
        </div>
        <div className='lg:w-[150px] hidden lg:flex justify-center'>
          <p className='font-outfit font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-black'>
            {TransformNumberToPriceFormat(price)}
          </p>
        </div>
        <div className='lg:w-[150px] flex gap-5 lg:justify-center items-center'>
          <p className={headersClassName}>Quantity:</p>
          <InputNumberItems defaultValue={quantity} idProduct={id} />
        </div>
        <div className='lg:w-[150px] flex gap-5 lg:justify-center items-center'>
          <p className={headersClassName}>Total:</p>
          <p className='font-outfit font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-black'>
            {TransformNumberToPriceFormat(price * quantity)}
          </p>
        </div>
        <div className='w-[150px] hidden lg:flex justify-center'>
          <ButtonDeleteProduct id={id} />
        </div>
      </div>
    </>
  );
}
