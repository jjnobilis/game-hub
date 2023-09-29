import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "./constants";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres")


// export const useGenres = () => useData<Genre>("/genres")
// export const useGenres = () => ({data:genres, error: null, isLoading:false});
const useGenres = () => 
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn:apiClient.getAll,
    staleTime: ms("24h"), // 24 * 60 * 60 * 1000, //24H soit 24 * (60mn * 60sec * 1000ms)
    initialData: genres, //{count:genres.length, results: genres, next:null, previous:null},
  });


export default useGenres;