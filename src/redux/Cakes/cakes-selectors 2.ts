import { RootState } from "../store";

export const selectAllCakes = (state: RootState) => state.cakes.cakes;
export const selectCakeById = (state: RootState) => state.cakes.cakeById;
export const selectStatusLoading = (state: RootState) => state.cakes.status;
