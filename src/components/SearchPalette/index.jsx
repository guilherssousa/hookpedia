import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  useEventListener,
  Flex,
  Center,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

function SearchPalette({ isOpen, onClose, onOpen }) {
  useEventListener("keydown", (event) => {
    if (!onClose || !onOpen) return;

    if (event.code === "KeyK" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      isOpen ? onClose() : onOpen();
    }
  });

  return (
    <Modal isOpen={isOpen} scrollBehavior="inside" onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="gray.700"
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
        rounded="lg"
        overflow="hidden"
        top="4vh"
        shadow="lg"
        maxW="600px"
      >
        <Flex pos="relative" align="stretch">
          <chakra.input
            aria-autocomplete="list"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            maxLength={64}
            textColor="white"
            bg="gray.700"
            sx={{
              w: "100%",
              h: "68px",
              pl: "68px",
              fontWeight: "medium",
              outline: 0,
            }}
            placeholder="Procure por um Hook... (ex.: useLocalStorage)"
          />
          <Center pos="absolute" left={7} h="68px">
            <Search2Icon color="teal.500" boxSize="20px" />
          </Center>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export { SearchPalette };
