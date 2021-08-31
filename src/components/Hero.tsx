import { Box, Heading, Img, Text } from "@chakra-ui/react";

export const Hero = () => (
	<Box
		as="section"
		bg="gray.50"
		pb="24"
		pos="relative"
		px={{ base: "6", lg: "12" }}
	>
		<Box maxW="7xl" mx="auto">
			<Box
				maxW={{ lg: "md", xl: "xl" }}
				pt={{ base: "20", lg: "40" }}
				pb={{ base: "16", lg: "24" }}
			>
				<Heading
					as="h1"
					size="3xl"
					lineHeight="1"
					fontWeight="extrabold"
					letterSpacing="tight"
					color="gray.700"
				>
					We kayak{" "}
					<Box as="mark" color="blue.500" bg="transparent">
						for Nature
					</Box>
				</Heading>
				<Text mt={4} fontSize="xl" fontWeight="medium" color="gray.600">
					Bringing awareness of the need to protect our delicate ecosystems in
					Aruba with conservation of Commandeurs Baai as a focal point. On
					Saturday,{" "}
					<Text as="span" fontWeight="bold" color="blue.500">
						4th of September{" "}
					</Text>{" "}
					we are going to cross from Curaçao to Aruba by kayak. We will start at
					Playa Kalki, west point of Curaçao, in the early morning hours and
					plan to arrive at Serene By The Sea Resort at sunset.
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
			<Img
				height="100%"
				width="100%"
				objectFit="cover"
				src="/banner-image.jpg"
				alt="Lady working"
			/>
		</Box>
	</Box>
);
