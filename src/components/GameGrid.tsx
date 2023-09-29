import { SimpleGrid, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
const GameGrid = () => {
  //Utilisation du store
  // const { gameQuery } = usGameQueryStore();

  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    // isFetchingNextPage,
    hasNextPage,
    //hasPreviousPage,
    //isFetchingPreviousPage,
    //fetchPreviousPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<SkeletonText></SkeletonText>} // loader={}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding="10px"
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                {" "}
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}

          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  {" "}
                  <GameCard key={game.id} game={game} />{" "}
                </GameCardContainer> // key={game.name}>{game.name}</li>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>

        {/* {hasPreviousPage && (
          <Button
            ml={3}
            marginY={3}
            mr={3}
            disabled={isFetchingPreviousPage}
            onClick={() => fetchPreviousPage()}
          >
            {isFetchingPreviousPage ? "Loading..." : "Previous Page"}
          </Button>
        )}

        {hasNextPage && (
          <Button
            ml={3}
            marginY={3}
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )} */}
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
