import { TypeProduct } from "@/app/page";
import Product from "../molecules/Product";

interface LayoutProductProps {
  products: TypeProduct[];
}

export default function LayoutProduct({products}:LayoutProductProps) {
  return (
    <section className="flex flex-wrap gap-5 gap-y-5 md:gap-20 justify-center">
      {Array.isArray(products) &&
        products.map((prod) => {
          return (
            <Product id={prod.id} url={prod.image} name={prod.title} price={prod.price} />
          );
        })}
    </section>
  );
}
