import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillState {
  value: number|"";
}

const initialState: BillState = {
  value: "",
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    updateBillValue: (state, action: PayloadAction<number|"">) => {
      state.value = action.payload;
    },
  },
});

export const { updateBillValue } = billSlice.actions;
export default billSlice.reducer;
