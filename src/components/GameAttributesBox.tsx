import { SimpleGrid, Text } from "@chakra-ui/react";
import GameAttributes from "./GameAttributes";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributesBox = ({ game }: Props) => {
  return (
    <div>
      <SimpleGrid columns={2} as="dl" marginTop={10}>
        <GameAttributes name="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes name="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </GameAttributes>
        <GameAttributes name="Genres">
          {game.genres?.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes name="Publishers">
          {game.publishers?.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GameAttributes>
      </SimpleGrid>
    </div>
  );
};

export default GameAttributesBox;
