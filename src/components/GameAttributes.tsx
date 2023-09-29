import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode | ReactNode[];
}

const GameAttributes = ({ name, children }: Props) => {
  return (
    <Box marginBottom={3}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {name}
      </Heading>
      <dd>{children}</dd>
    </Box>

    // <>
    //   <Text fontWeight="bold">{name}</Text>
    //   <List>
    //     {list.map((i) => (
    //       <ListItem>{i}</ListItem>
    //     ))}
    //   </List>
    // </>
  );

  return <div>GameAttributes</div>;
};

export default GameAttributes;
