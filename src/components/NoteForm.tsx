import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteTodo, getTodos, updateTodo } from "../store/todo.thunks";

export default function NoteForm({ id, onClose }: any) {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.todo);
  const toast = useToast();
  const todo = entities?.find((e) => e.id === id);
  const [content, setContent] = useState<any>(todo?.content);
  const [title, setTitle] = useState<any>(todo?.title);

  function handleUpdateNote() {
    const newTodo = {
      title,
      content,
    };
    dispatch(updateTodo({ id, todo: newTodo }))
      .unwrap()
      .then(() => {
        dispatch(getTodos());
        onClose();
      })
      .catch(() => {
        toast({
          status: "error",
          title: "Error updating note!",
        });
      });
  }

  function handleDeleteNote() {
    dispatch(deleteTodo(id))
      .unwrap()
      .then(() => {
        dispatch(getTodos());
        onClose();
      })
      .catch(() => {
        toast({
          status: "error",
          title: "Error deleting note!",
        });
      });
  }

  return (
    <>
      <VStack spacing={2} alignItems="flex-start">
        <FormLabel>Título da nota</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <FormLabel>Conteúdo da nota</FormLabel>
        <Textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></Textarea>
      </VStack>
      <Flex mt={5} mb={3} dir="row" justify="space-between" alignItems="center">
        <Button
          isLoading={loading === "pending"}
          colorScheme="red"
          size="sm"
          onClick={handleDeleteNote}
        >
          Delete
        </Button>
        <HStack spacing={3}>
          <Button
            isLoading={loading === "pending"}
            variant="ghost"
            colorScheme="green"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            isLoading={loading === "pending"}
            onClick={handleUpdateNote}
            colorScheme="green"
          >
            Criar Nota
          </Button>
        </HStack>
      </Flex>
    </>
  );
}
