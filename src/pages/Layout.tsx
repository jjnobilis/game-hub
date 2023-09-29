import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>

    // <Grid
    //   templateAreas={{
    //     base: `"nav" "main"`,
    //     lg: `"nav nav" "aside main"`,
    //   }}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "200px 1fr",
    //   }}
    // >
    //   <GridItem area="nav">
    //     <NavBar></NavBar>
    //   </GridItem>
    //   <Outlet />
    // </Grid>
  );
};

export default Layout;
