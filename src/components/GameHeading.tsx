import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import usGameQueryStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: Props) => {
const GameHeading = () => {
  //Utilisation du store
  const genreIdParam = usGameQueryStore((s) => s.gameQuery.genreId);
  const platformIdParam = usGameQueryStore((s) => s.gameQuery.platformId);

  //Etant donné que GameQuery ne contient que l'id du genre,
  //On va requeter sur la liste des genres et recupérer les information du genre
  //const { data: genres } = useGenres();
  // const leGenreSelected = genres?.results.find((g) => g.id === genreIdParam);
  const leGenreSelected = useGenre(genreIdParam);

  // const { data: platforms } = usePlatforms();
  const laPlatformSelected = usePlatform(platformIdParam);

  // platforms?.results.find(
  //   (p) => p.id === gameQuery.platformId
  // );
  //

  const heading = `${laPlatformSelected?.name || ""} ${
    leGenreSelected?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
