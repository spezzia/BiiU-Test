"use client";

import React, { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { reducerProducts } from "./reducerCarShop";

export enum ProductActionKind {
  add = "add",
  remove = "remove",
  update = "update",
}

export interface ProductAction {
  type: ProductActionKind;
  product: Product;
}

export interface Product {
  productId: number;
  quantity: number
}

const CarShopContext = createContext<{
  actionProduct: Dispatch<ProductAction>;
  products: Product[];
}>({
  actionProduct: () => {},
  products: [],
});

const initialState: Array<Product> = [];

export function CarShopProvider({ children }: { children: React.ReactNode }) {

  const [products, actionProduct] = useReducer(reducerProducts, initialState);

  useEffect(()=>{
    console.log(products)
  },[products])

  return (
    <CarShopContext.Provider
      value={{ actionProduct: actionProduct, products: products }}
    >
      {children}
    </CarShopContext.Provider>
  );
}

export const useCarShop = () => useContext(CarShopContext);
