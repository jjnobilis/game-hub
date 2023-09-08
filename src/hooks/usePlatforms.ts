import platforms from "../data/platforms";
export interface Platform{
    id: number;
    name: string;
    slug: string;
}

// export const usePlatforms = () => useData<Platform>("/platforms/lists/parents")
export const usePlatforms = () => ({data:platforms, error: null, isLoading:false});

export default usePlatforms;