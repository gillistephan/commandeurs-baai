import * as React from "react";

import { AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

export const Banner = () => (
  <Stack
    direction="row"
    spacing={{ base: "10", md: "3" }}
    px={{ base: "3", md: "6" }}
    color="blue.500"
    justifyContent="center"
    alignItems="center"
    mb="2"
  >
    <HStack direction="row" spacing="2" as="a" href="mailto:fundacommandeursbaai@gmail.com" cursor="pointer">
      <Box as={AiOutlineMail} fontSize="2xl" h="10" />
      <Text fontWeight="medium" marginEnd="2" whiteSpace="nowrap" display={{ base: "none", sm: "block" }}>
        fundacommandeursbaai@gmail.com
      </Text>
    </HStack>

    <HStack direction="row" spacing="2" as="a" href="http://www.instagram.com/Commandeursbaai" cursor="pointer">
      <Box as={AiOutlineInstagram} fontSize="2xl" h="10" />
      <Text fontWeight="medium" marginEnd="2" whiteSpace="nowrap" display={{ base: "none", sm: "block" }}>
        Instagram
      </Text>
    </HStack>
    <HStack direction="row" spacing="2" as="a" href="https://m.facebook.com/Fundacommandeursbaai-101678608250014/" cursor="pointer">
      <Box as={AiOutlineFacebook} fontSize="2xl" h="10" />
      <Text fontWeight="medium" marginEnd="2" display={{ base: "none", sm: "block" }}>
        Facebook
      </Text>
    </HStack>
  </Stack>
);
