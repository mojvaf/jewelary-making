import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";
import itemReducer from './slice/item'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from './slice/auth'

const store =  configureStore({
  reducer: {
    counter: counterReducer,
    items: itemReducer,
    auth: authReducer
  },
});

export default store


// Infer the `RootState` and `AppDispatch` types from the store itself
 type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector