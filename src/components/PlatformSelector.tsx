import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import usGameQueryStore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number; //Platform | null;
// }

// const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
const PlatformSelector = () => {
  //Utilisation du store
  const platformIdParam = usGameQueryStore((s) => s.gameQuery.platformId);
  const onPlatformParamSet = usGameQueryStore((s) => s.onPlatformParamSet);

  const { data: platforms, error } = usePlatforms();
  const laPlatformSelected = usePlatform(platformIdParam);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {laPlatformSelected?.name || "Filtrer par Plateforme"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            // onClick={() => onSelectPlatform(platform)}
            onClick={() => onPlatformParamSet(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
