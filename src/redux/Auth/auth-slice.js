import { createSlice } from "@reduxjs/toolkit";
import { register, verifyUser, login, logout } from "./auth-operations";

const initUser = {
  name: "",
  phone: "",
  password: "",
  email: "",
};

const initialState = {
  user: initUser,
  token: null,
  isRefreshed: false,
  isVerified: false,
  error: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(register.fulfilled, state => {
        state.isRefreshed = false;
        state.isVerified = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyUser.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.isVerified = true;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(login.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.isVerified = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });
    builder
      .addCase(logout.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isRefreshed = false;
        state.error = null;
        state.user = initUser;
        state.token = null;
        state.refreshToken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
