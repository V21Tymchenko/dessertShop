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

export const getCakes = createAsyncThunk(
  "desert/types",
  async (type: string, thunkAPI) => {
    try {
      const { data } = await axios.get(`/desert/deserts-of-type/${type}`, {
        params: { type },
      });
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

export const getCakesById = createAsyncThunk(
  "desert/byId",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await axios.get(`/desert/${id}`);
      tokenControl.set(data.token);
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
