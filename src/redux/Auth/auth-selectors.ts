import { RootState } from "../store";

export const selectEmail = (state: RootState) => state.auth.user.email;
export const selectToken = (state: RootState) => state.auth.token;
export const selectName = (state: RootState) => state.auth.user.name;
export const selectIsVerified = (state: RootState) => state.auth.isVerified;
