import { Box, BoxProps } from "@chakra-ui/react";
import GenreList from "./GenreList";

export const Sidebar = (props: BoxProps) => {
  return (
    <Box
      as="aside"
      role="complementary"
      bg="bg.accent.default"
      width="full"
      alignSelf="start"
      position={{ base: "unset", lg: "sticky" }}
      top="36"
      {...props}
    >
      <GenreList></GenreList>
    </Box>
  );
};
