import { RootState } from "../../store";

export const selectCardItem = (state: RootState) => state.card.item;
export const selectCardStatus = (state: RootState) => state.card.status;

