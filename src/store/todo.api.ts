import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const { useGetTodosQuery, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = todosApi;

