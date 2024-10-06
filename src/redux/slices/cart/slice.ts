import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardFromCart } from "../../../types/types";
import { getCartFromLS } from "../../../utils/getCartFromLS";
import { CartState } from "./types";

const cart = getCartFromLS();
const items = cart.items;
const totalPrice = cart.totalPrice;

const initialState: CartState = {
  items,
  totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICardFromCart>) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice += action.payload.price;
    },
    addSomeItem(state, action: PayloadAction<ICardFromCart>) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItem) {
        findItem.count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice += action.payload.price * action.payload.count;
    },
    remoteItem(state, action: PayloadAction<ICardFromCart>) {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    reduceItem(state, action: PayloadAction<ICardFromCart>) {
      if (action.payload.count > 1) {
        const findItem = state.items.find(
          (item) =>
            item.id === action.payload.id && item.size === action.payload.size
        );
        if (findItem) {
          findItem.count--;
        }
      } else {
        state.items = state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id && item.size === action.payload.size
            )
        );
      }

      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addItem, remoteItem, reduceItem, addSomeItem } =
  cartSlice.actions;
export default cartSlice.reducer;