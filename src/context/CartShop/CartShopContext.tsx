'use client';

import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { reducerProducts } from './reducerCartShop';

export enum ProductActionKind {
  add = 'add',
  remove = 'remove',
  update = 'update',
}

export interface ProductAction {
  type: ProductActionKind;
  product: Product;
}

export interface Product {
  productId: number;
  quantity: number;
  image: string;
  name: string;
  price: number;
}

const CartShopContext = createContext<{
  actionProduct: Dispatch<ProductAction>;
  products: Product[];
  totalAmount: number;
}>({
  actionProduct: () => {},
  products: [],
  totalAmount: 0,
});

const initialState: Array<Product> = [];

export function CartShopProvider({ children }: { children: React.ReactNode }) {
  const [products, actionProduct] = useReducer(reducerProducts, initialState);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const updateTotalAmount = () => {
    let amount = 0;
    products.forEach((prod) => {
      let total = 0;
      total = prod.price * prod.quantity;
      amount += total;
    });
    setTotalAmount(amount);
  };

  useEffect(() => {
    updateTotalAmount();
  }, [products]);

  return (
    <CartShopContext.Provider
      value={{ actionProduct: actionProduct, products: products, totalAmount }}
    >
      {children}
    </CartShopContext.Provider>
  );
}

export const useCartShop = () => useContext(CartShopContext);
