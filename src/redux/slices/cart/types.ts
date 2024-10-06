import { ICardFromCart } from "../../../types/types";

export interface CartState {
    items: ICardFromCart[];
    totalPrice: number;
  }