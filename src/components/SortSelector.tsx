import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordonner par ...
        {/* {selectedPlatform?.name || "Ordonner par ..."} */}
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => ( */}
        <MenuItem
        // onClick={() => onSelectPlatform(platform)}
        // key={platform.id}
        >
          {/* {platform.name} */}
          Item 1
        </MenuItem>
        {/* ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
