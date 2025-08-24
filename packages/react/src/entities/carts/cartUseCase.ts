import type { Product } from "../products";
import { CART_ACTIONS, cartStore } from "./cartStore";

export const addToCart = (product: Product, quantity = 1) => {
  cartStore.dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { product, quantity } });
};

export const removeFromCart = (productId: string) => {
  cartStore.dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  cartStore.dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { productId, quantity } });
};

export const toggleCartSelect = (productId: string) => {
  cartStore.dispatch({ type: CART_ACTIONS.TOGGLE_SELECT, payload: productId });
};

export const selectAllCart = () => {
  cartStore.dispatch({ type: CART_ACTIONS.SELECT_ALL });
};

export const deselectAllCart = () => {
  cartStore.dispatch({ type: CART_ACTIONS.DESELECT_ALL });
};

export const removeSelectedFromCart = () => {
  cartStore.dispatch({ type: CART_ACTIONS.REMOVE_SELECTED });
};

export const clearCart = () => {
  cartStore.dispatch({ type: CART_ACTIONS.CLEAR_CART });
};
