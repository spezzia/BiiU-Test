import { TypeProduct } from "@/app/page";
import ImageProduct from "../atoms/ImageProduct";
import DescriptionProduct from "../atoms/DescriptionProduct";
import AddToCard from "../atoms/AddToCart";
import Divider from "../atoms/Divider";
import ProductName from "../atoms/ProductName";
import CategoryProduct from "../atoms/CategoryProduct";
import PriceProduct from "../atoms/PriceProduct";
import StartRating from "../atoms/StarRating";

interface LayoutDescriptionProductProps {
  product: TypeProduct;
}

export default function LayoutDescriptionProduct({
  product,
}: LayoutDescriptionProductProps) {
  return (
    <section className="flex w-full max-w-[1300px] flex-wrap gap-5 lg:flex-row sm:flex-nowrap">
      <div className="w-full h-[300px] sm:w-4/6 lg:w-1/2 sm:h-fit lg:h-full relative aspect-square lg:aspect-auto">
        <ImageProduct
          url={product.image}
          alt={product.title}
          className="rounded-[10px] bg-white p-1 border-[2px] border-bgImageProduct"
        />
      </div>
      <div className="w-full lg:flex-1">
        <ProductName nameProduct={product.title} isAvailable={true} />
        <div className="h-[10px]" />
        <CategoryProduct category={product.category} />
        <div className="h-[10px]" />
        <div className="flex flex-row items-center justify-between">
          <PriceProduct price={product.price} />
          <StartRating rating={product.rating.rate} />
        </div>
        <div className="h-[30px]" />
        <Divider />
        <div className="h-[30px]" />
        <AddToCard product={product} />
        <div className="h-[30px]" />
        <DescriptionProduct description={product.description} />
      </div>
    </section>
  );
}
