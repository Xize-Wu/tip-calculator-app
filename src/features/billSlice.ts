import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillState {
  value: number;
}

const initialState: BillState = {
  value: 0,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = billSlice.actions;
export default billSlice.reducer;
