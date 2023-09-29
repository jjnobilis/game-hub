import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { CACHE_KEY_GAMES } from "./constants";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games")



// export const useGames = (gameQuery : GameQuery) => useData<Game>("/games", 
//     {params: { 
//         genres: gameQuery.genre?.id, 
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//     }},
//     [gameQuery])

// const useGames = (gameQuery : GameQuery) => {
const useGames = () => {
    const gameQuery= useGameQueryStore(s => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery],
        queryFn: ({pageParam = 1}) =>  
            apiClient.getAll({
                params: { 
                    genres: gameQuery.genreId, 
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                }
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next? allPages.length + 1 : undefined; //on retourne undefined quand on est en fin de list
        },
        getPreviousPageParam: () => {
            // return firstPage.previous? allPages.length - 1 : undefined; //on retourne undefined quand on est en debut de list
        },
        staleTime: ms('24h'), // 24 * 60 * 60 * 1000, //24H soit 24 * (60mn * 60sec * 1000ms)

        //     () => apiClient.get<FetchResponse<Game>>('/games',{params: { 
        //     genres: gameQuery.genre?.id, 
        //     parent_platforms: gameQuery.platform?.id,
        //     ordering: gameQuery.sortOrder,
        //     search: gameQuery.searchText,
        // }})
        // .then((res) => res.data),
        // staleTime: 60 * 1000, //60 secondes
        // keepPreviousData: true,
});}

export default useGames;