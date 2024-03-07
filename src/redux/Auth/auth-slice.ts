import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  register,
  verifyUser,
  login,
  logout,
  googleLogin,
} from "./auth-operations";

export interface InitUser {
  name: string;
  phone: string;
  password: string;
  email: string;
}

export interface InitialState {
  user: InitUser;
  token: string | null;
  isRefreshed: boolean;
  isVerified: boolean;
  google?: null | object;
  error: unknown;
  refreshToken: string | null;
  file: string | null;
}

const initUser: InitUser = {
  name: "",
  phone: "",
  password: "",
  email: "",
};

export const initialState: InitialState = {
  user: initUser,
  token: null,
  isRefreshed: false,
  isVerified: false,
  error: null,
  refreshToken: null,
  file: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<string>) => {
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
      .addCase(register.rejected, (state, action: PayloadAction<unknown>) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(verifyUser.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(
        verifyUser.fulfilled,
        (state, action: PayloadAction<InitialState>) => {
          state.isRefreshed = false;
          state.isVerified = true;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
        }
      )
      .addCase(verifyUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(login.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<InitialState>) => {
          state.isRefreshed = false;
          state.isVerified = false;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<unknown>) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });
    
    builder
      .addCase(googleLogin.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(
        googleLogin.fulfilled,
        (state, action) => {
          state.isRefreshed = false;
          state.isVerified = false;
          state.error = null;
          state.google = action.payload;
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
        }
      )
      .addCase(
        googleLogin.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isRefreshed = false;
          state.error = action.payload;
        }
      );
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
      .addCase(logout.rejected, (state, action: PayloadAction<unknown>) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
