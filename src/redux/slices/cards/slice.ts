import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status, ICard } from "../../../types/types";
import { fetchCards } from "./asyncActions";
import { CardsState } from "./types";

const initialState: CardsState = {
    items: [],
    status: Status.DEFAULT,
  };
  
  const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
      setItems(state, action: PayloadAction<ICard[]>) {
        state.items = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCards.pending, (state, action) => {
        state.status = Status.LOADING;
      }),
        builder.addCase(fetchCards.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }),
        builder.addCase(fetchCards.rejected, (state, action) => {
          state.status = Status.ERROR;
        });
    },
  });
  
  export const { setItems } = cardsSlice.actions;
  export default cardsSlice.reducer;
  