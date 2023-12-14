import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PercentageState {
  value: number
}

const initialState: PercentageState = {
  value: 0,
}

export const percentageSlice = createSlice({
  name: 'percentage',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>)=> {
      state.value = action.payload
    },
  },
})

export const { setValue } = percentageSlice.actions

export default percentageSlice.reducer