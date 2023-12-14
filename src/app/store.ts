import { configureStore } from '@reduxjs/toolkit'
import percentageReducer from '../features/percentageSlice'
import billReducer from '../features/billSlice'


export const store = configureStore({
  reducer: {
    percentage: percentageReducer,
    bill:billReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch