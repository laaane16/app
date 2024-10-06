import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchFilter } from "../../../types/types";
import { FilterState } from "./types";

const initialState: FilterState = {
  category: {
    available: true,
    type: "all",
  },
  sort: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTypeFilter(state, action: PayloadAction<string>) {
      state.category.type = action.payload;
    },
    setAvailableFilter(state, action: PayloadAction<boolean>) {
      state.category.available = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<ISearchFilter>) {
      state.category.type = action.payload.type;
      state.category.available = action.payload.available;
      state.sort = action.payload.sortValue;
    },
  },
});

export const { setTypeFilter, setAvailableFilter, setSort, setFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
