'use client';

import { TypeProduct } from '@/app/page';
import Product from '../molecules/Product';
import { useState } from 'react';
import AddMoreProducts from '../atoms/AddMoreProducts';

interface LayoutProductProps {
  products: TypeProduct[];
}

export default function LayoutProduct({ products }: LayoutProductProps) {
  const [allProducts, setAllProducts] = useState<TypeProduct[]>(products);

  return (
    <section className=''>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 gap-y-5 md:gap-20 justify-center'>
        {Array.isArray(allProducts) &&
          allProducts.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                url={prod.image}
                name={prod.title}
                price={prod.price}
                category={prod.category}
              />
            );
          })}
      </div>
      <div className='w-full flex justify-center items-center mt-5'>
        <AddMoreProducts
          products={allProducts.length}
          setAllProducts={setAllProducts}
        />
      </div>
    </section>
  );
}
