import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
  }


export const useGames = (genre : Genre|null) => useData<Game>("/games", {params: { genres: genre?.id}}, [genre?.id])

export default useGames;