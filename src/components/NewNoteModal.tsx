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
import { useAppDispatch } from "../store/store";

import { useCreateTodoMutation} from "../store/todo.api";
import { addTodo } from "../store/todo.slice";

export default function NewNoteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const dispatch = useAppDispatch();
  const [createApiTodo, { isLoading }] = useCreateTodoMutation();
  const textareaRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  function handleNewNote() {
    const newTodo = {
      title: inputRef?.current?.value,
      content: textareaRef?.current?.value,
    };
    dispatch(addTodo(newTodo))
    createApiTodo(newTodo)
  }

  return (
    <>
      <Button onClick={onOpen}>New note</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2} alignItems="flex-start">
              <FormLabel>Title</FormLabel>
              <Input ref={inputRef} />
              <FormLabel>Content</FormLabel>
              <Textarea ref={textareaRef}></Textarea>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              variant="ghost"
              colorScheme="green"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              isLoading={isLoading}
              onClick={handleNewNote}
              colorScheme="green"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
