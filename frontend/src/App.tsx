import { Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@heroui/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen grid place-items-center">
      <Button color="primary" onPress={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Yo bro 😄</ModalHeader>
          <ModalBody>Welcome here :)...</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
