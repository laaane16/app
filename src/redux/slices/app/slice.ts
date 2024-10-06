import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./types";

const initialState: AppState = {
    isMounted: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsMounted(state){
            state.isMounted = true;
        }
    }
})

export const { setIsMounted } = appSlice.actions;

export default appSlice.reducer