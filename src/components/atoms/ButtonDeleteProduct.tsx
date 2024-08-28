"use client"

import { ProductActionKind, useCartShop } from "@/context/CartShop/CartShopContext";
import { FaRegTrashAlt } from "react-icons/fa";

interface ButtonDeleteProductProps {
    id: number
}

export default function ButtonDeleteProduct({id}: ButtonDeleteProductProps){

    const { actionProduct } = useCartShop()

    const handleDeleteProduct = () =>{
        actionProduct({type:ProductActionKind.remove,product:{
            productId: id,
            quantity: 0,
            image: "",
            name: "",
            price: 0
        } })
    }

    return(
        <button type="button" className="w-fit cursor-pointer hover:opacity-70" onClick={handleDeleteProduct}>
            <FaRegTrashAlt className="text-[27px] text-[#059669]" />
        </button>
    )
}

