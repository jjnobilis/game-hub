import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";
import GamesPage from "./pages/GamesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetails /> },
      {
        path: "games",
        element: <GamesPage />,
        children: [{ path: ":id", element: <GameDetails /> }],
      },
    ],
  },
  //Layout Routes
  //   {
  //     element: <PrivateRoutes />,
  //     children: [
  //       {
  //         path: "users",
  //         element: <UserPage />,
  //         children: [{ path: ":id", element: <UserDetail /> }],
  //       },
  //     ],
  //   },
]);

export default router;
