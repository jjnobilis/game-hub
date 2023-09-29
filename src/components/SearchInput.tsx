import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import usGameQueryStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
const SearchInput = () => {
  //Utilisation du store
  const onSearchTextParamSet = usGameQueryStore((s) => s.onSearchTextParamSet);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // if (ref.current) onSearch(ref.current.value);
        if (ref.current) {
          onSearchTextParamSet(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Rechercher un jeu..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
