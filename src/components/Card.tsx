import * as React from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalProps,
	useDisclosure,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";

export interface CardProps {
	idx: number;
	name: string;
	url: string;
	text: string;
	readMore?: boolean;
}

const ReadMoreModal = (props: CardProps & Omit<ModalProps, "children">) => {
	const { isOpen, onClose, name, text } = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="2xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text fontSize="lg" color="gray.700">
						{text}
					</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export const Card = (props: CardProps) => {
	const disclosure = useDisclosure();
	const { idx, name, url, text, readMore } = props;

	return (
		<React.Fragment>
			<ReadMoreModal {...props} {...disclosure} />
			<Box
				w="full"
				bg="white"
				boxShadow="xl"
				rounded="md"
				p={6}
				overflow="hidden"
			>
				<Box h="350px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
					<Image
						src={url}
						height="full"
						w="full"
						position="absolute"
						top="0"
						left="0"
						objectFit="cover"
						bg="white"
						border="none"
					/>
				</Box>
				<Flex direction="column">
					<Text
						color="yellow.300"
						textTransform="uppercase"
						fontWeight={800}
						fontSize="sm"
						letterSpacing="tight"
					>
						Kayaker {idx + 1}
					</Text>
					<Heading color="gray.700" letterSpacing="tight">
						{name}
					</Heading>
					<Box my={6}>
						<Box as={ImQuotesLeft} color="blue.500" fontSize="3xl" mb={3} />
						<Text color="gray.600" minH="100px" noOfLines={6}>
							{text}
						</Text>

						{readMore && (
							<Button
								variant="link"
								mt="4"
								colorScheme="blue"
								onClick={disclosure.onOpen}
							>
								Read more
								<AiOutlineArrowRight style={{ marginLeft: "12px" }} />
							</Button>
						)}
					</Box>
				</Flex>
			</Box>
		</React.Fragment>
	);
};
