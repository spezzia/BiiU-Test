
interface CategoryProductProps {
    category:string
}

export default function CategoryProduct({ category }: CategoryProductProps){
    return(
        <p className="font-outfit font-normal text-[#334155] text-[16px] lg:text-[20px] uppercase">{category}</p>
    )
}

