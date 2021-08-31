import * as React from "react";

import { AiOutlineCreditCard, AiOutlineShareAlt } from "react-icons/ai";
import {
	Box,
	Circle,
	Flex,
	Heading,
	Icon,
	Image,
	Stack,
	StackProps,
	Text,
} from "@chakra-ui/react";

export const List = (props: StackProps) => {
	const { children, ...stackProps } = props;
	const items = React.useMemo(
		() =>
			React.Children.toArray(children)
				.filter<React.ReactElement<ListItemProps>>(React.isValidElement)
				.map((item, index, array) =>
					index + 1 === array.length
						? React.cloneElement(item, { isLastItem: true })
						: item
				),
		[children]
	);
	return (
		<Stack as="ul" {...stackProps}>
			{items}
		</Stack>
	);
};

export interface ListItemProps extends StackProps {
	title: string;

	icon?: React.ReactElement;
	isLastItem?: boolean;
}

export const ListItem = (props: ListItemProps) => {
	const { title, icon, isLastItem, children, ...stackProps } = props;

	return (
		<Stack as="li" direction="row" spacing="4" {...stackProps}>
			<Flex direction="column" alignItems="center" aria-hidden="true">
				<Circle
					bg="yellow.300"
					size="16"
					borderWidth="4px"
					borderColor="white"
					color="white"
				>
					{icon}
				</Circle>
				{!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-12" />}
			</Flex>
			<Stack spacing="4" pt="1" flex="1">
				<Flex direction="column">
					<Heading fontSize="3xl" color="blue.500" fontWeight="semibold">
						{title}
					</Heading>
				</Flex>
				{children}
			</Stack>
		</Stack>
	);
};

export const Procedure = () => {
	return (
		<Box as="section" py={{ base: "12", md: "20" }} maxW="7xl" mx="auto">
			<Stack
				direction={{ base: "column", lg: "row" }}
				spacing={{ base: "3rem", lg: "2rem" }}
				align={{ lg: "center" }}
				justify="space-between"
			>
				<Box maxW="3xl" mx="auto" p={{ base: "4", md: "8" }}>
					<Heading
						color="gray.700"
						size="2xl"
						fontWeight="extrabold"
						lineHeight="normal"
						mb="12"
						letterSpacing="tight"
					>
						Show us your support by
					</Heading>
					<List spacing="12">
						<ListItem
							title="Donate to our Foundations"
							icon={<Icon as={AiOutlineCreditCard} boxSize="7" />}
						>
							<div>
								<Stack direction="column" ml="4">
									<Text color="gray.700" fontSize="lg" fontWeight="bold">
										Fundacion Proteccion y Conservacion di Commandeurs Baai
									</Text>
									<Text color="gray.700" fontSize="lg">
										at Aruba Bank Account# 6018540190
									</Text>
									<Text color="gray.700" fontSize="lg">
										"Kayak for Nature"
									</Text>
								</Stack>
								<Stack direction="column" ml="4" mt="8">
									<Text color="gray.700" fontSize="lg" fontWeight="bold">
										Ryan de Jongh Charity Foundation
									</Text>
									<Text color="gray.700" fontSize="lg">
										at Banco di Caribe Account#30412802
									</Text>
									<Text color="gray.700" fontSize="lg">
										"Kayak for Nature"
									</Text>
								</Stack>
							</div>
						</ListItem>
						<ListItem
							title="Share the beauty of Aruba's Nature"
							icon={<Icon as={AiOutlineShareAlt} boxSize="7" />}
						>
							<Text color="gray.700" fontSize="lg">
								We wish to call on all who feel connected to the island nature
								to share photos, videos and other images on our facebook page,
								which show the beauty in Aruba's nature.
							</Text>
						</ListItem>
					</List>
				</Box>
				<Box
					pos="relative"
					w={{ base: "full" }}
					h={{ base: "auto", lg: "660px" }}
				>
					<Image
						w="full"
						pos="relative"
						zIndex="1"
						h={{ lg: "100%" }}
						objectFit="contain"
						src="/the_maskot.jpg"
					/>
					<Box
						pos="absolute"
						w="100%"
						h="100%"
						top="-4"
						left="-4"
						bg="gray.50"
					/>
				</Box>
			</Stack>
		</Box>
	);
};
