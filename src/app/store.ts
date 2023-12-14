import { configureStore } from '@reduxjs/toolkit'
import percentageReducer from '../features/percentageSlice'
import billReducer from '../features/billSlice'
import peopleReducer from '../features/peopleSlice'


export const store = configureStore({
  reducer: {
    percentage: percentageReducer,
    bill:billReducer,
    people: peopleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch