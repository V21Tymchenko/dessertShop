import axios from "axios";
import { Notify } from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://online-store-frwk.onrender.com";

const tokenControl = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
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
      Notify.failure(err.message);

      return thunkAPI.rejectWithValue(err.message);
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
      return thunkAPI.rejectWithValue(err.message);
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
      return data;
    } catch (err) {
      Notify.failure(`Login error: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/logout");

    tokenControl.unset(data.token);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
