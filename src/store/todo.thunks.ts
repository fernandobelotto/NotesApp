import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoApi } from "./todo.api";
import { Todo } from "./todo.model";

export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (todo: Todo) => {
    return TodoApi.create(todo);
  }
);

type updateProps = { id: string; todo: Todo };
export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, todo }: updateProps) => {
    return TodoApi.updateById(id, todo);
  }
);

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  return TodoApi.fetch();
});

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id: string) => {
    return TodoApi.deleteById(id);
  }
);