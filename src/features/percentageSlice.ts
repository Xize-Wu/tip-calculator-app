import { createSlice } from '@reduxjs/toolkit'

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
    setValue: (state) => {
      state.value = 0.05
    },
  },
})

export const { setValue } = percentageSlice.actions

export default percentageSlice.reducer