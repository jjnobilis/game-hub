import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesRespons {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} /> // key={game.name}>{game.name}</li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
