import { Center, Container, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import NewNoteModal from "./components/NewNoteModal";
import NotesList from "./components/NotesList";
import { useAppDispatch } from "./store/store";
import { getTodos } from "./store/todo.thunks";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("opa, render");
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Container>
        <Center h="100vh">
          <VStack>
            <NewNoteModal />
            <NotesList />
          </VStack>
        </Center>
      </Container>
    </>
  );
}
