import {create} from "zustand";
import {mountStoreDevtool} from "simple-zustand-devtools";

//undefined is the absence of value
//null is the intentional absence of value

export interface GameQuery {
    genreId?: number; //| undefined;
    platformId?: number; // Platform | undefined;
    sortOrder?: string;
    searchText?: string;
  }
  
interface GameQueryStore{
    gameQuery: GameQuery;
    onGenreParamSet: (genreId: number) => void;
    onPlatformParamSet: (platformId: number) => void;
    onSearchTextParamSet: (searchText: string) => void;
    onSortOrderParamSet: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    onGenreParamSet: (genreId) => set((store) => ({gameQuery: {...store.gameQuery, genreId  } } )),
    onPlatformParamSet: (platformId) => set((store) => ({gameQuery: {...store.gameQuery, platformId  } } )),
    onSearchTextParamSet: (searchText) => set((store) => ({gameQuery: {...store.gameQuery, searchText  } } )),
    onSortOrderParamSet: (sortOrder) => set((store) => ({gameQuery: {...store.gameQuery, sortOrder  } } )),

}))

if (process.env.NODE_ENV === "development")
    mountStoreDevtool("Game Query Store", useGameQueryStore)

export default useGameQueryStore;