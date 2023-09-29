import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usGameQueryStore from "../store";

// interface Props {
//   onSelectSortOrder: (sortSelector: string) => void;
//   sortOrder: string;
// }

// export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
export const SortSelector = () => {
  //Utilisation du store
  const sortOrderParam = usGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSortOrderParamSet = usGameQueryStore((s) => s.onSortOrderParamSet);

  const sortOrders = [
    { value: "name", label: "Nom" },
    { value: "-released", label: "Date de sortie" },
    { value: "-added", label: "Date d'ajout" },
    { value: "-created", label: "Date de création" },
    { value: "-updated", label: "Date de mise à jour" },
    { value: "-rating", label: "Popularité" },
    { value: "-metacritic", label: "Criticité" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrderParam //sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ranger par {currentSortOrder?.label || "..."}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            // onClick={() => onSelectSortOrder(order.value)}
            onClick={() => onSortOrderParamSet(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
