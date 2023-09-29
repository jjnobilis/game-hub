import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  useDisclosure,
  // useBoolean,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import usGameQueryStore from "../store";
import GenreSkeleton from "./GenreSkeleton";
import { useNavigate } from "react-router-dom";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number; // | null;
// }

// const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  // const location = useLocation();
  // const [redir, setRedir] = useBoolean(false);
  const navigate = useNavigate();
  const { onClose } = useDisclosure();

  // if (location.pathname.indexOf("/games/") === 0) setRedir.toggle();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //Utilisation du store
  const genreIdParam = usGameQueryStore((s) => s.gameQuery.genreId);
  const onGenreParamSet = usGameQueryStore((s) => s.onGenreParamSet);

  //if (isLoading) return <GenreSkeleton />;

  return (
    <>
      {!error && (
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
      )}
      {error && <Text>{error.message}</Text>}
      {isLoading &&
        skeletons.map((sk) => <GenreSkeleton key={sk}></GenreSkeleton>)}
      <List>
        {genres?.results.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Button
                fontWeight={genreIdParam === gen.id ? "bold" : "normal"}
                // onClick={() => onSelectGenre(gen)}
                onClick={() => {
                  onGenreParamSet(gen.id);
                  onClose();
                  navigate("/");
                }}
                fontSize="lg"
                variant="link"
                textAlign="left"
                whiteSpace="normal"
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
