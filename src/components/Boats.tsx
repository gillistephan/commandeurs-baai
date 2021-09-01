import { Box, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";

export interface BoatCardProps {
  boatName: string;
  skipper: Array<string>;
  url: string;
}

export const BoatCard = (props: BoatCardProps) => {
  const { boatName, skipper, url } = props;

  return (
    <Flex direction="column" align="center" p="6" rounded="8px" textAlign="center" border="1px" borderColor="gray.100">
      <Box width="full">
        <Text fontSize="xl" fontWeight="bold" textTransform="uppercase" letterSpacing="wide" color="blue.500">
          {boatName}
        </Text>
        <Image height="350px" src={url} alt={`boat-${boatName}`} my="4" objectFit="contain" mx="auto" />
        <Text as="span" color="gray.800" fontSize="lg" lineHeight="1" textAlign="center" mt="8">
          {skipper.join(", ")}
        </Text>
      </Box>
    </Flex>
  );
};
