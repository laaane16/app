import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter/slice";
import cart from "./slices/cart/slice";
import cards from "./slices/cards/slice";
import card from "./slices/card/slice";
import app from './slices/app/slice'
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filter, cart, cards, card, app },
});
export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>


export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store