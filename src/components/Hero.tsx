import { Box, Heading, Img, Text, HStack, Badge } from "@chakra-ui/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

export const Hero = () => (
  <Box as="section" bg="gray.50" pb="24" pos="relative" px={{ base: "6", lg: "12" }}>
    <Box maxW="7xl" mx="auto">
      <Box maxW={{ lg: "md", xl: "xl" }} pt={{ base: "20", lg: "40" }} pb={{ base: "16", lg: "24" }}>
        <HStack
          className="group"
          as="a"
          href="https://www.facebook.com/events/810680392926079"
          px="2"
          bg="blue.500"
          rounded="full"
          fontSize="sm"
          mb="8"
          display="inline-flex"
          minW="18rem"
        >
          <Badge variant="solid" colorScheme="blue" rounded="full" textTransform="capitalize">
            <Box as={AiOutlineFacebook} fontSize="2xl" h="8" />
          </Badge>
          <Box fontWeight="medium" color="white">
            See our Facebook-Event
          </Box>
          <Box
            aria-hidden
            transition="0.2s all"
            _groupHover={{ transform: "translateX(2px)" }}
            as={HiArrowRight}
            display="inline-block"
            color="white"
          />
        </HStack>
        <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight" color="gray.700">
          We kayak{" "}
          <Box as="mark" color="blue.500" bg="transparent">
            for Nature
          </Box>
        </Heading>
        <Text mt={4} fontSize="xl" fonxtWeight="medium" color="gray.600">
          Bringing awareness of the need to protect our delicate ecosystems in Aruba with conservation of Commandeurs Baai as a focal point.
          On Saturday,{" "}
          <Text as="span" fontWeight="bold" color="blue.500">
            4th of September 2021{" "}
          </Text>{" "}
          we are going to cross from Curaçao to Aruba by kayak. We will start at Playa Kalki, west point of Curaçao, in the early morning
          hours and plan to arrive at Serene By The Sea Resort in the afternoon.
        </Text>
        <Text mt={4} fontSize="xl" fontWeight="bold" color="blue.500">
          Goal: Afl. 27.548 / US$ 15.742
        </Text>
      </Box>
    </Box>
    <Box
      pos={{ lg: "absolute" }}
      insetY={{ lg: "0" }}
      insetEnd={{ lg: "0" }}
      bg="gray.50"
      w={{ base: "full", lg: "50%" }}
      height={{ base: "96", lg: "full" }}
    >
      <Img height="100%" width="100%" objectFit="cover" src="/banner-image.jpg" alt="Lady working" />
    </Box>
  </Box>
);
