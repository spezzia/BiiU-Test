interface ProductNameProps {
  nameProduct: string;
  isAvailable: boolean;
}

export default function ProductName({
  nameProduct,
  isAvailable,
}: ProductNameProps) {

  const statusClassNames = 'font-outfit font-normal text-[#767676] text-[12px] lg:text-[15px] w-fit mt-5'  


  return (
    <div className="w-full flex flex-nowrap gap-3">
      <h1 className="font-outfit font-bold text-[25px] lg:text-[40px] text-[#000000] flex-1">
        {nameProduct}
      </h1>
      {isAvailable ? <p className={statusClassNames}>Product available</p> : <p className={statusClassNames}>Product unavailable</p>}
    </div>
  );
}
