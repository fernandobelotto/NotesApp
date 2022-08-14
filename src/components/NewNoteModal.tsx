import {
  Button, FormLabel, Input, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Textarea, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { createTodo, getTodos } from "../store/todo.thunks";

export default function NewNoteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.todo);
  const textareaRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  function handleNewNote() {
    const newTodo = {
      title: inputRef?.current?.value,
      content: textareaRef?.current?.value,
    };
    dispatch(createTodo(newTodo))
      .unwrap()
      .then(() => {
        dispatch(getTodos());
        onClose();
      })
      .catch(() => {
        toast({
          status: "error",
          title: "Error creating note!",
        });
      });
  }

  return (
    <>
      <Button onClick={onOpen}>Nova Nota</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Nota</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2} alignItems="flex-start">
              <FormLabel>Título da nota</FormLabel>
              <Input ref={inputRef} />
              <FormLabel>Conteúdo da nota</FormLabel>
              <Textarea ref={textareaRef}></Textarea>
            </VStack>
          </ModalBody>

          <ModalFooter>
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
              onClick={handleNewNote}
              colorScheme="green"
            >
              Criar Nota
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
