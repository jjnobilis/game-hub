import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/midid.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Text>NavBar</Text> */}
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
