import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  // const [gameQuery, setGameQuery] = useState({} as GameQuery);
  // const {
  //   gameQuery,
  //   onGenreParamSet,
  //   onPlatformParamSet,
  //   onSearchTextParamSet,
  //   onSortOrderParamSet,
  // } = usGameQueryStore();
  // const [sortSelector, setSortSelector] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
        // onSearch={
        //   (searchText) => onSearchTextParamSet(searchText)
        //   // setGameQuery({ ...gameQuery, searchText })
        // }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          // onSelectGenre={
          //   (genre) => onGenreParamSet(genre.id)
          //   // setGameQuery({ ...gameQuery, genreId: genre.id })
          // }
          // selectedGenreId={gameQuery.genreId}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          {/* <GameHeading gameQuery={gameQuery} /> */}
          <GameHeading />
          <HStack spacing={5} marginBottom={10}>
            <PlatformSelector
            // selectedPlatformId={gameQuery.platformId}
            // onSelectPlatform={
            //   (platform) => onPlatformParamSet(platform.id)
            //   // setGameQuery({ ...gameQuery, platformId: platform.id })
            // }
            />
            <SortSelector
            // sortOrder={sortSelector}
            // // onSelectSortOrder={(sortOrder) => {
            // onSelectSortOrder={() => {
            //   // setGameQuery({ ...gameQuery, sortOrder });
            //   setSortSelector(sortOrder);
            // }}
            />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
