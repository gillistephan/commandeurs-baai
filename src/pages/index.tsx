import * as React from "react";

import {
	Ads,
	Banner,
	CallToAction,
	Footer,
	Hero,
	Procedure,
	Card,
	Foundations,
	kayaker,
	boats,
	BoatCard,
} from "../components";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

export const App = () => {
	return (
		<React.Fragment>
			<Banner />
			<Hero />
			<Foundations />
			<CallToAction />
			<Procedure />
			<Box
				w="full"
				bg="gray.50"
				px={{ base: 4, md: "8" }}
				py={{ base: "12", md: "40" }}
			>
				<Heading
					size="2xl"
					fontWeight="extrabold"
					letterSpacing="tight"
					color="gray.700"
					mb="12"
					maxW="8xl"
					mx="auto"
				>
					Long Distance Kayakers
				</Heading>
				<SimpleGrid
					columns={{ sm: 1, md: 2, lg: 2 }}
					gap={10}
					mx="auto"
					maxW="8xl"
				>
					{kayaker.map((item) => (
						<Card key={item.idx} {...item} />
					))}
				</SimpleGrid>
			</Box>
			<Box as="section" px={{ base: "6", md: "12" }} pt="16">
				<Box maxW="7xl" mx="auto">
					<Heading
						size="xl"
						mb="8"
						fontWeight="extrabold"
						color="gray.700"
						textAlign="center"
					>
						Support Boats
					</Heading>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
						{boats.map((boat, index) => (
							<BoatCard {...boat} key={index} />
						))}
					</SimpleGrid>
				</Box>
			</Box>
			<Ads />
			<Footer />
		</React.Fragment>
	);
};

export default App;
