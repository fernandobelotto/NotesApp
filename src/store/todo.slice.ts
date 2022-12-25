import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./todo.model";

type InitialStateType = {
  entities: Todo[];
};

const InitialState: InitialStateType = {
  entities: []
};

const todoSlice = createSlice({
  initialState: InitialState,
  name: "todos",
  reducers: {
      addTodo: (state, action) => {
        state.entities.push(action.payload);
      },
      removeTodo: (state, action) => {
        state.entities = state.entities.filter((todo) => todo.id !== action.payload);
      },
      updateTodo: (state, action) => {
        const index = state.entities.findIndex((todo) => todo.id === action.payload.id);
        state.entities[index] = action.payload;
      },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const TodoReducer = todoSlice.reducer;
