import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
