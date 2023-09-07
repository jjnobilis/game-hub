import {
  Card,
  CardBody,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

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
