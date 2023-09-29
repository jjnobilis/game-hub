import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/midid.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      {/* <Text>NavBar</Text> */}
      {/* <SearchInput onSearch={onSearch}></SearchInput> */}
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
