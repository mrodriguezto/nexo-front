import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegisterData } from '../types';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type SendCodeReturnType = { code: string };

export const sendRegisterCode = createAsyncThunk<SendCodeReturnType>(
  'register/send-code',
  async () => {
    await sleep(2000);

    // TODO: mutation to send the code to the user email
    const code = '123456';

    return {
      code,
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
    updateRegisterData: (state: RegisterState, action: PayloadAction<IRegisterData>) => {
      state.data = action.payload;
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

export const { updateStep, updateRegisterData } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
