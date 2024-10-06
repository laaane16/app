import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../../types/types";
import { Status } from "./../../../types/types";
import { fetchCardById } from "./asyncActions";
import { CardState } from "./types";

const initialState: CardState = {
    item: { id: "", price: 0, title: "", urlImage: "" },
    status: Status.DEFAULT, // loading || success || error
  };
  
  const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
      setItems(state, action:PayloadAction<ICard>) {
        state.item = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCardById.pending, (state) => {
        state.status = Status.LOADING;
      }),
        builder.addCase(fetchCardById.fulfilled, (state, action) => {
          state.item = action.payload;
          state.status = Status.SUCCESS;
        }),
        builder.addCase(fetchCardById.rejected, (state) => {
          state.status = Status.ERROR;
        });
    },
  });
  
  export const { setItems } = cardSlice.actions;
  export default cardSlice.reducer;