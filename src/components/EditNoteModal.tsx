import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import NoteForm from "./NoteForm";

export default function EditNoteModal({ id, functions }: any) {
  const { isOpen, onClose } = functions;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editando Nota!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NoteForm id={id} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
