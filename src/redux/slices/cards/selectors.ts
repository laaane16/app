import { RootState } from "../../store";

export const selectCardsItems = (state: RootState) => state.cards.items;
export const selectCardsStatus = (state: RootState) => state.cards.status;
