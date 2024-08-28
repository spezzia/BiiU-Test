import { TypeProduct } from "@/app/page";
import Product from "../molecules/Product";

interface LayoutProductProps {
  products: TypeProduct[];
}

export default function LayoutProduct({products}:LayoutProductProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 gap-y-5 md:gap-20 justify-center">
      {Array.isArray(products) &&
        products.map((prod) => {
          return (
            <Product key={prod.id} id={prod.id} url={prod.image} name={prod.title} price={prod.price} category={prod.category} />
          );
        })}
    </section>
  );
}
