import { Card, CardBody, HStack, SkeletonText } from "@chakra-ui/react";

const GameDetailsSkeleton = () => {
  return (
    <>
      <Card marginY="5px">
        <HStack>
          <SkeletonText fadeDuration={1} height="30px" />
          <CardBody>
            <SkeletonText fadeDuration={2} height="150px" />
          </CardBody>
        </HStack>
      </Card>
    </>
  );
};

export default GameDetailsSkeleton;
