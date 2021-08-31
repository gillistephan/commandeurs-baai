import * as React from "react";

import {
	Box,
	BoxProps,
	Heading,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";

export const Foundations = () => (
	<Box
		as="section"
		maxW="8xl"
		mx="auto"
		px={{ base: "6", md: "8" }}
		pt={{ base: "12", md: "40" }}
		pb={{ base: "12", md: "20" }}
	>
		<Stack
			spacing="8"
			direction={{ base: "column", md: "row" }}
			divider={<StackDivider />}
		>
			<Stack direction="column" flex="1">
				<Heading
					color="blue.500"
					size="2xl"
					fontWeight="extrabold"
					lineHeight="normal"
				>
					Commandeurs Baai <Text color="gray.700">Foundation</Text>
				</Heading>
				<Text fontSize="lg" color="gray.700">
					The aim of the Fundacion Proteccion y Conservacion di Commandeurs Baai
					is to protect and conserve the heritage of the neighbourhoods
					Savaneta, Brazil and Pos Chiquito. We defend and protect the coast and
					the ocean in the area of Commandeurs Baai as well as the mangroves
					from Spanish Lagoon all the way up to Zeesicht.
				</Text>
			</Stack>
			<Stack direction="column" flex="1">
				<Heading
					color="blue.500"
					size="2xl"
					fontWeight="extrabold"
					lineHeight="normal"
				>
					Ryan De Jongh Charity <Text color="gray.700">Foundation</Text>
				</Heading>

				<Text fontSize="lg" color="gray.700">
					We dedicate ourselves to the empowerment of especially our youth
					including sports, education and nature to implement preservation, the
					country nature as well as the marine environment.
				</Text>
			</Stack>
		</Stack>
	</Box>
);
