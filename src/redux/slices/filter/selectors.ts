import { RootState } from "../../store";

export const selectFilterCategory = (state: RootState) => state.filter.category;

export const selectFilterSort = (state: RootState) => state.filter.sort;
