import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./todo.model";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./todo.thunks";

type InitialStateType = {
  entities: Todo[] | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const InitialState: InitialStateType = {
  entities: null,
  loading: "idle",
};

const todoSlice = createSlice({
  initialState: InitialState,
  name: "todos",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })
      .addCase(createTodo.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(updateTodo.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = "failed";
      })

      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = "failed";
      })

      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(getTodos.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

// export const { } = todoSlice.actions;

export const TodoReducer = todoSlice.reducer;
