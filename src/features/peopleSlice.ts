import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PeopleState {
  value: number;
}

const initialState: PeopleState = {
  value: 0,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updatePeopleValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { updatePeopleValue } = peopleSlice.actions;
export default peopleSlice.reducer;
