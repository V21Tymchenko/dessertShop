import { createSlice } from '@reduxjs/toolkit';
import { 
    register,
    verifyUser,
    login 
} from './auth-operations';


const initUser = {
    firstname: '',
    lastname: '',
    tel:'',
    password: '',
    email: '',
  };

const initialState = {
    user: initUser,
    token: null,
    isAuthorized: false,
    isRefreshed: false,
    isVerified: false,
    error: null,
  };

  export const authSlice = createSlice({
    name: 'auth',
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
        .addCase(register.fulfilled, (state, action) => {
          state.isRefreshed = false;
          state.isAuthorized = true;
          state.isVerified = false;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
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
          state.isAuthorized = true;
          state.isVerified = true;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
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
          state.isAuthorized = true;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(login.rejected, (state, action) => {
          state.isRefreshed = false;
          state.error = action.payload;
        });


    }})

    export const authReducer = authSlice.reducer;