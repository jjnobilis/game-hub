import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button
        as={Button}
        children={colorMode === "dark" ? <BsMoonFill /> : <BsSun />}
        onClick={toggleColorMode}
      ></Button>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Mode sombre" : "Mode Clair"}
      </Text> */}
    </HStack>
  );
};

export default ColorModeSwitch;
