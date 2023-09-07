import {
  Button,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Filtrer par Plateformes"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>

    // <Select
    //   className="form-select form-select-sm mb-3"
    //   width="250px"
    //   size="sm"
    //   variant="filled"
    //   padding="10px"
    //   placeholder="Filtrer par platforme ..."
    //   onChange={(event) => onSelectPlatform(event.target.value)}
    // >
    //   {data.map((p) => (
    //     <option value={p.id}>{p.name}</option>
    //   ))}
    // </Select>
  );
};

export default PlatformSelector;
