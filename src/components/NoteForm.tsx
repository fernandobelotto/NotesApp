import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Textarea,
  useToast,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../store/todo.api";
import { removeTodo } from "../store/todo.slice";

export default function NoteForm({ id, onClose }: any) {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.todo);
  const [deleteTodo, { isLoading: isLoadingDelete }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: isLoadingUpdate }] = useUpdateTodoMutation();
  const toast = useToast();
  const todo = entities?.find((e) => e.id === id);
  const [content, setContent] = useState<any>(todo?.content);
  const [title, setTitle] = useState<any>(todo?.title);

  function handleUpdateNote() {
    const newTodo = {
      title,
      content,
    };
  }

  function handleDeleteNote() {
    dispatch(removeTodo({ id }))
  }

  return (
    <>
      <VStack spacing={2} alignItems="flex-start">
        <FormLabel>Title</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <FormLabel>Content</FormLabel>
        <Textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></Textarea>
      </VStack>
      <Flex mt={5} mb={3} dir="row" justify="space-between" alignItems="center">
        <Button
          isLoading={isLoadingDelete}
          colorScheme="red"
          size="sm"
          onClick={handleDeleteNote}
        >
          Delete
        </Button>
        <HStack spacing={3}>
          <Button
            isLoading={isLoadingDelete}
            variant="ghost"
            colorScheme="green"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            isLoading={isLoadingDelete}
            onClick={handleUpdateNote}
            colorScheme="green"
          >
            Create
          </Button>
        </HStack>
      </Flex>
    </>
  );
}
