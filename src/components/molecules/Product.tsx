import { TransformNumberToPriceFormat } from "@/utils/numberUtils";
import ImageProduct from "../atoms/ImageProduct";
import Link from "next/link";

interface ProductProps {
  id: number;
  url: string;
  name: string;
  price: number;
}

export default function Product({ id, url, name, price }: ProductProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col w-fit max-w-[155px] md:max-w-[286px]">
        <div className="w-[155px] h-[175px] md:w-[286px] md:h-[323px] relative">
          <ImageProduct
            url={url}
            alt={name}
            className="rounded-[10px] bg-white p-1 border-[2px] border-bgImageProduct"
          />
        </div>
        <p className="font-outfit text-[16px] md:text-[20px] font-bold line-clamp-1 text-[#0F172A]">
          {name}
        </p>
        <p className="font-outfit text-[16px] md:text-[20px] font-light text-[#10B981]">
          {TransformNumberToPriceFormat(price)}
        </p>
      </div>
    </Link>
  );
}
