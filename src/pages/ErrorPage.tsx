import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Cette page n'existe pas"
          : "Une erreur inattendue s'est produite"}
      </Text>
    </>
  );

  //   <div>{isRouteErrorResponse(error) ? "" : ""}</div>;
};

export default ErrorPage;
