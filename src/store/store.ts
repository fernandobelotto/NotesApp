import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TodoReducer } from "./todo.slice";
import { todosApi } from "./todo.api";

const reducer = {
  todo: TodoReducer,
  [todosApi.reducerPath]: todosApi.reducer,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
