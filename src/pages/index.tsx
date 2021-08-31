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
						<Card {...item} />
					))}
				</SimpleGrid>
			</Box>

			<Ads />
			<Footer />
		</React.Fragment>
	);
};

export default App;
