import { GetProducts } from "@/api/project/products";
import ImageProduct from "@/components/atoms/ImageProduct";
import TitlePage from "@/components/atoms/TitlePage";
import Product from "@/components/molecules/Product";
import LayoutProduct from "@/components/organisms/LayoutProduct";

export interface TypeProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function Home() {
  const products = await GetProducts<TypeProduct[]>(10);

  return (
    <div className="pb-32">
      <TitlePage label="Shop"/>
      <div className="pt-10 lg:px-5 flex justify-center">
        <LayoutProduct products={Array.isArray(products) ? products : []} />
      </div>
    </div>
  );
}
