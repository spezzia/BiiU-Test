import { GetProductsByID } from "@/api/project/products";
import { TypeProduct } from "@/app/page";
import LayoutDescriptionProduct from "@/components/organisms/LayoutDescriptionProduct";
import { notFound } from "next/navigation";

export default async function DetailProduct({
  params,
}: {
  params: { id: number };
}) {
  const product = await GetProductsByID<TypeProduct>(params.id);

  if (product === undefined || typeof product === "string") {
    return notFound();
  }

  return (
    <main className="w-full flex justify-center">
      <div className="w-full flex justify-center pt-20 pb-20">
        <LayoutDescriptionProduct product={product} />
      </div>
    </main>
  );
}
