'use client';

import RowTableCart from '../molecules/RowTableCart';
import HeadersTableCart from '../molecules/HeadersTableCart';
import { useCartShop } from '@/context/CartShop/CartShopContext';
import FooterTableCart from '../molecules/FooterTableCart';
import NoProductsCart from '../molecules/NoProductsCart';

export default function ListCardProducts() {
  const { products } = useCartShop();

  return (
    <section className='w-full px-10'>
      {products.length > 0 && (
        <>
          <HeadersTableCart />
          {products.map((prod) => {
            return (
              <RowTableCart
                key={prod.productId}
                id={prod.productId}
                url={prod.image}
                productName={prod.name}
                price={prod.price}
                quantity={prod.quantity}
              />
            );
          })}
          <div className='h-[50px]' />
          <FooterTableCart />
          <div className='h-[50px]' />
        </>
      )}
      {products.length == 0 && <NoProductsCart />}
    </section>
  );
}
