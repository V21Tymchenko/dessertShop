import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./Auth/auth-slice";
import cakesReducer from "./Cakes/cakes-slice";

const persistRegistrConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer
);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  cakes: cakesReducer,
});

