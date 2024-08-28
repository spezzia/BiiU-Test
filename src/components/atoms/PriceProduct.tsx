import { TransformNumberToPriceFormat } from "@/utils/numberUtils"


interface PriceProductProps {
    price:number
}

export default function PriceProduct({price}:PriceProductProps){
    return(
        <p className="font-outfit font-normal text-[16px] lg:text-[20px]  text-[#10B981]">{TransformNumberToPriceFormat(price)}</p>
    )
}

