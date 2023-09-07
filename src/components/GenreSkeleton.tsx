import {
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <Card marginY="5px">
        <HStack>
          <SkeletonCircle height="30px" />
          <CardBody>
            <SkeletonText height="30px" />
          </CardBody>
        </HStack>
      </Card>
    </>
  );
};

export default GenreSkeleton;
