import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "./constants";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")



// export const usePlatforms = () => useData<Platform>("/platforms/lists/parents")
// export const usePlatforms = () => ({data:platforms, error: null, isLoading:false});
export const usePlatforms = () => 
     useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: apiClient.getAll,
        // () =>
        // apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
        // .then((res) => res.data),
        staleTime: ms('24h'), //24 * 60 * 60 * 1000, //24H soit 24 * (60mn * 60sec * 1000ms)
        initialData: platforms, //{count:platforms.length, results: platforms, next:null, previous:null},
  });


export default usePlatforms;