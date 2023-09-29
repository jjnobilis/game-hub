import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  //   console.log(trailers);
  if (isLoading) return null;
  if (error) throw error;

  const firstVideo = trailers?.results[0];
  if (firstVideo)
    return (
      <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
    );

  return null;
};

export default GameTrailer;
