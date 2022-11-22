import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegisterData } from '../types';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type SendCodeReturnType = { code: string; data: IRegisterData };

export const sendRegisterCode = createAsyncThunk<SendCodeReturnType, IRegisterData>(
  'register/send-code',
  async (data: IRegisterData) => {
    // TODO: mutation to send the code to the user email
    await sleep(2000);

    return {
      data,
      code: '123456',
    };
  },
);

export type RegisterState = {
  data: IRegisterData | null;
  step: number;
  code: string | null;
  isSending: boolean;
};

const initialState: RegisterState = {
  data: null,
  step: 0,
  code: null,
  isSending: false,
};

export const registerSlice = createSlice({
  initialState,
  name: 'register',
  reducers: {
    updateStep: (state: RegisterState, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendRegisterCode.pending, (state: RegisterState) => {
        state.isSending = true;
      })
      .addCase(
        sendRegisterCode.fulfilled,
        (state: RegisterState, action: PayloadAction<SendCodeReturnType>) => {
          return {
            ...state,
            data: action.payload.data,
            code: action.payload.code,
            isSending: false,
            step: 1,
          };
        },
      )
      .addCase(sendRegisterCode.rejected, (state: RegisterState) => {
        state.isSending = false;
      });
  },
});

export const { updateStep } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
