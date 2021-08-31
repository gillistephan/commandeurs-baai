import * as React from "react";

import {
	Box,
	ButtonGroup,
	Flex,
	IconButton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
	return (
		<Box as="footer" role="contentinfo" py="6" bg="blue.500" color="white">
			<Flex
				direction={{ base: "column", md: "row" }}
				maxW={{ base: "xl", md: "7xl" }}
				mx="auto"
				px={{ base: "6", md: "8" }}
				align="center"
			>
				<a
					aria-current="page"
					aria-label="Back to Home page"
					href="/"
					rel="home"
				/>
				<Stack
					my={{ base: "6", md: 0 }}
					direction={{ base: "column", md: "row" }}
					marginStart={{ md: "8" }}
					fontSize="sm"
					spacing={{ base: "2", md: "2" }}
					textAlign={{ base: "center", md: "start" }}
				>
					<Text>
						&copy; {new Date().getFullYear()} Foundation Commandeurs Baai & Ryan
						De Jongh Charity Foundation | TBD | TBD
					</Text>
				</Stack>
				<ButtonGroup marginStart={{ md: "auto" }} color="white" variant="ghost">
					<IconButton
						as="a"
						href="https://m.facebook.com/Fundacommandeursbaai-101678608250014/"
						aria-label="Facebook"
						icon={<FaFacebook />}
					/>
					<IconButton
						as="a"
						href="http://www.instagram.com/Commandeursbaai"
						aria-label="Instagram"
						icon={<FaInstagram />}
					/>
				</ButtonGroup>
			</Flex>
		</Box>
	);
};
