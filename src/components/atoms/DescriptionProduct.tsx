
interface DescriptionProductProps{
    description: string
}

export default function DescriptionProduct({description}:DescriptionProductProps) {
  return (
    <div className="w-full">
      <h3 className="font-outfit font-light text-[18px] lg:text-[20px] uppercase">
        Product description
      </h3>
      <p className="font-outfit font-light text-[16px] lg:text-[18px] mt-4">{description}</p>
    </div>
  );
}
