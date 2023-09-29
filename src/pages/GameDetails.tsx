import { Box, Button, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributesBox from "../components/GameAttributesBox";
import GameDetailsSkeleton from "../components/GameDetailsSkeleton";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const location = useLocation();

  const { data: game, error, isLoading } = useGame(slug!); // ! Après la variable indique que la variable ne sera jamais null

  if (isLoading) return <GameDetailsSkeleton />;
  if (error || !game) throw error; //<Text>Erreur</Text>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributesBox game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
        {/* <Text>{game.description_raw}</Text> */}
      </SimpleGrid>

      {/* <Box paddingTop={5}>
        <Link to="/">
          <Button>Home Page</Button>{" "}
        </Link>
      </Box> */}
    </>
  );
};

export default GameDetails;
