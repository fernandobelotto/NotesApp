import { Center, Container, VStack } from "@chakra-ui/react";
import NewNoteModal from "./components/NewNoteModal";
import NotesList from "./components/NotesList";

export default function App() {

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
