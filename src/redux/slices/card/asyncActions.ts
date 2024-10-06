import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICard } from "../../../types/types";

export const fetchCardById = createAsyncThunk<ICard, string>(
    "card/fetchcard",
    async (id) => {
      const response = await axios.get<ICard>(
        "https://66e3139b494df9a478e433fe.mockapi.io/api/items/" + id
      );
      return response.data;
    }
  );
  