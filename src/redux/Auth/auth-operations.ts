import axios from "axios";
import { Notify } from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://online-store-frwk.onrender.com";

const tokenControl = {
  set(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset(): void {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/email/register", credentials);
      tokenControl.set(data.token);

      Notify.success(
        "A confirmation has been sent to your email. Please confirm your email!"
      );
      return data;
    } catch (err) {
      const hasErrResponse = (err as { message: { [key: string]: string } })
        .message;
      if (!hasErrResponse) {
        throw err;
      }
      Notify.failure(`${hasErrResponse}`);
      return thunkAPI.rejectWithValue(hasErrResponse);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verify",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/email/confirm", credentials);
      Notify.success("We confirm your email successfully!");
      tokenControl.set(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);

      tokenControl.set(data.token);

      Notify.success("Login is successful");
      console.log(data);
      return data;
    } catch (err) {
      const hasErrResponse = (err as { message: { [key: string]: string } })
        .message;
      if (!hasErrResponse) {
        throw err;
      }
      Notify.failure(`Login error: ${hasErrResponse}`);
      return thunkAPI.rejectWithValue(hasErrResponse);
    }
  }
);

export const logout = createAsyncThunk<void, undefined>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/auth/logout");

      tokenControl.unset();
    } catch (err) {
      const hasErrMessage = (err as { message: { [key: string]: string } })
        .message;
      if (!hasErrMessage) {
        throw err;
      }
      return thunkAPI.rejectWithValue(hasErrMessage);
    }
  }
);
