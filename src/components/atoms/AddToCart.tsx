"use client";

import {
  ProductActionKind,
  useCarShop,
} from "@/context/CarShop/CarShopContext";

interface AddToCardProps {
  id: number;
}

export default function AddToCard({ id }: AddToCardProps) {
  const { products, actionProduct } = useCarShop();

  const handleAddProduct = () => {
    actionProduct({
      type: ProductActionKind.add,
      product: { productId: id, quantity: 1 },
    });
  };

  const handleDeleteProduct = () => {
    actionProduct({
      type: ProductActionKind.remove,
      product: { productId: id, quantity: 1 },
    });
  };

  if (products.some((prod) => prod.productId === id)) {
    return (
      <button onClick={handleDeleteProduct} className="bg-[#EB6383] rounded-[30px] flex justify-center items-center py-3 w-full hover:bg-[#EB6383]/40">
        <p className="font-outfit font-semibold text-[18px] sm:text-[20px] text-white">
          Delete product
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddProduct}
      className="bg-[#059669] rounded-[30px] flex justify-center items-center py-3 w-full hover:opacity-70"
    >
      <p className="font-outfit font-semibold text-[18px] sm:text-[20px] text-white">
        + Add to cart
      </p>
    </button>
  );
}
