import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/midid.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import GenreListMobileDrawer from "./GenreListMobileDrawyer";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
const NavBar = () => {
  return (
    <Box>
      <HStack padding="10px">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <GenreListMobileDrawer />
        {/* <Text>NavBar</Text> */}
        {/* <SearchInput onSearch={onSearch}></SearchInput> */}
        <SearchInput></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
