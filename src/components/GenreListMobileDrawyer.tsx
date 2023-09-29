import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
// import { DocumentCollapse } from "./DocumentCollapse";
import GenreList from "./GenreList";
import { ToggleButton } from "./ToggleButton";

const GenreListMobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", lg: "none" }}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt={5} p="4" width="80%">
            <Stack spacing="1">
              <GenreList></GenreList>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreListMobileDrawer;
