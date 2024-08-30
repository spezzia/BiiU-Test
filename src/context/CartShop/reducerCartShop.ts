import { Product, ProductAction } from "./CartShopContext";

export function reducerProducts(
  state: Array<Product>,
  action: ProductAction
): Product[] {
  if (action.type === "add") {
    if (state !== undefined) {
      if (!state.some((prod) => prod.productId === action.product.productId)) {
        return [...state, action.product];
      }
    } else {
      return [
        {
          ...action.product,
        },
      ];
    }
  }
  if (action.type === "remove") {
    if (state !== undefined && state.length > 0) {
      if (state.some((prod) => prod.productId === action.product.productId)) {
        return [
          ...state.filter(
            (prod) => prod.productId !== action.product.productId
          ),
        ];
      }
      return [...state];
    } else {
      return [];
    }
  }
  if (action.type === "update") {
    if (state !== undefined && state.length > 0) {
      if (state.some((prod) => prod.productId === action.product.productId)) {
        return [
          ...state.map((prod) => {
            if (action.product.productId === prod.productId) {
              return {
                ...action.product,
              };
            }
            return {
              ...prod,
            };
          }),
        ];
      }
      return [...state];
    } else {
      return [];
    }
  }
  if (action.type === "deleteAll") {
    return [];
  }
  return state;
}
