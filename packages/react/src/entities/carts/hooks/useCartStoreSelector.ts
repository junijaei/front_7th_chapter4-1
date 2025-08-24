import { useStore } from "@hanghae-plus/lib";
import { cartStore } from "../cartStore";

type CartState = ReturnType<(typeof cartStore)["getState"]>;

export const useCartStoreSelector = <T>(selector: (cart: CartState) => T) => {
  return useStore(cartStore, selector);
};
