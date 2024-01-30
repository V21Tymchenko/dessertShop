import { AllCakesProps } from "@/helpers/generalInterface";
import { StatusForAll } from "@/helpers/status";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCakes, getCakesById } from "./cakes-operations";

interface DesertFillingProps {
  name: string;
  imagePath: string;
}
export interface cakeByIdProps {
  id?: number;
  name: string;
  imagePath: string;
  desertFilling: DesertFillingProps[];
  price: number;
  weight?: number;
  quantity?: string;
  type?: string;
}

interface InitialState {
  cakes: AllCakesProps[];
  cakeById: cakeByIdProps | null;
  status: string;
  error: unknown | null;
  file: string | null;
}

const initialState: InitialState = {
  cakes: [],
  cakeById: null,
  status: StatusForAll.init,
  error: null,
  file: null,
};

const cakesSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<string>) => {
      state.file = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCakes.pending, state => {
        state.status = StatusForAll.loading;
      })
      .addCase(
        getCakes.fulfilled,
        (state, action: PayloadAction<AllCakesProps[]>) => {
          state.status = StatusForAll.success;
          state.cakes = action.payload;
        }
      )
      .addCase(getCakes.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = StatusForAll.error;
        state.error = action.payload;
      });
    builder
      .addCase(getCakesById.pending, state => {
        state.status = StatusForAll.loading;
      })
      .addCase(
        getCakesById.fulfilled,
        (state, action: PayloadAction<cakeByIdProps | null>) => {
          state.status = StatusForAll.success;
          state.cakeById = action.payload;
        }
      )
      .addCase(
        getCakesById.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = StatusForAll.error;
          state.error = action.payload;
        }
      );
  },
});
export const { setFile } = cakesSlice.actions;

export default cakesSlice.reducer;
