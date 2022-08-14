import { Box, Button, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../store/store";
import EditNoteModal from "./EditNoteModal";

export default function NotesList() {
  const { entities } = useAppSelector((state) => state.todo);
  const [id, setId] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openEditModal(noteId?: string) {
    setId(noteId || null);
    onOpen();
  }

  if (!entities?.length)
    return (
      <Box>
        <Box>
          <Text>Você não possui notas!</Text>
        </Box>
      </Box>
    );

  if (entities.length)
    return (
      <>
        <SimpleGrid
          p={5}
          border="1px solid"
          rounded="lg"
          borderColor="gray.300"
        >
          {entities.map((todo) => {
            return (
              <>
                <Button
                  onClick={() => openEditModal(todo?.id)}
                  m={1}
                  paddingX={2}
                  bg="gray.200"
                  rounded="lg"
                >
                  {todo.title}
                </Button>
              </>
            );
          })}
        </SimpleGrid>

        <EditNoteModal id={id} functions={{ isOpen, onOpen, onClose }} />
      </>
    );

  return null;
}
