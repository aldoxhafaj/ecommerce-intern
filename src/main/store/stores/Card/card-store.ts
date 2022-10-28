import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isTemplateSpan } from "typescript";
import { ICartProduct } from "../../../interfaces/ICartProduct";

let initialState = {
  items: [] as any,
  total: 0,
};

const cartStore = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(_state, action: PayloadAction<ICartProduct>) {
      _state.total += action.payload.price * action.payload.amount;

      const existingProduct = _state.items.find(
        (item: any) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.amount += action.payload.amount;
      } else {
        _state.items.push(action.payload);
      }
    },
    decreaseProduct(_state, action: PayloadAction<Number>) {
      const deletedProduct = _state.items.find(
        (item: any) => item.id === action.payload
      );
      _state.total = _state.total - deletedProduct.price;

      if (deletedProduct.amount === 1) {
        _state.items = _state.items.filter(
          (item: any) => item.id !== action.payload
        );
      } else {
        deletedProduct.amount -= 1;
      }
    },

    clearCart(_state) {
      _state.items = [];
      _state.total = 0;
    },
  },
});

console.log(cartStore);

export default cartStore;

export const { addToCart, decreaseProduct, clearCart } = cartStore.actions;
