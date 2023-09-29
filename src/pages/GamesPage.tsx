import { Outlet, useParams } from "react-router-dom";
import HomePage from "./HomePage";

const GamesPage = () => {
  const params = useParams();

  if (!params.id) return <HomePage />;
  return (
    <>
      <Outlet />
    </>
  );
};

export default GamesPage;
