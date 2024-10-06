import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICard } from "../../../types/types";

export const fetchCards = createAsyncThunk<ICard[]>(
  "card/fetchCards",
  async () => {
    const response = await axios.get<ICard[]>(
      "https://66e3139b494df9a478e433fe.mockapi.io/api/items"
    );
    return response.data;
  }
);
