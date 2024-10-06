import { RootState } from "../../store";

export const selectIsMounted = (state: RootState) => state.app.isMounted
