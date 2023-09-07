import React from "react";
import {
  Button,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //if (isLoading) return <GenreSkeleton />;

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((sk) => <GenreSkeleton key={sk}></GenreSkeleton>)}
      <List>
        {data.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(gen)}
                fontSize="lg"
                variant="link"
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
