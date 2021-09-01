import * as React from "react";
import {
  Box,
  Button,
  Heading,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

type FormState = {
  name: string;
  email: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
  notes?: string;
};

type SubmitState = {
  isLoading: boolean;
  success: boolean;
  error: boolean;
  errorMessage?: string;
};

const emptyState: FormState = { name: "", email: "" };

export const CallToAction = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [state, setState] = React.useState<FormState>(emptyState);
  const [submitState, setSubmitState] = React.useState<SubmitState>({
    isLoading: false,
    success: false,
    error: false,
  });

  const isValid = state.name && state.email;

  function onChange(attribute: keyof FormState, value: string | number) {
    setState((prevState) => ({ ...prevState, [attribute]: value }));
  }

  function onSubmit() {
    setSubmitState((prevState) => ({ ...prevState, isLoading: true }));
    fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onFailure();
      });
  }

  function onSuccess() {
    setSubmitState((prevState) => ({
      ...prevState,
      isLoading: false,
      success: true,
    }));
    setState(emptyState);

    setTimeout(() => {
      onClose();
      setSubmitState((prevState) => ({ ...prevState, success: false }));
    }, 4000);
  }
  function onFailure() {
    setSubmitState((prevState) => ({
      ...prevState,
      isLoading: false,
      error: true,
      errorMessage: "Unfortunately, something went wrong. Please try again later.",
    }));
    setTimeout(() => {
      setSubmitState((prevState) => ({
        ...prevState,
        error: false,
        errorMessage: undefined,
      }));
    }, 2000);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setState(emptyState);
        }}
        isCentered
        size="xl"
        closeOnEsc={!submitState.isLoading}
        closeOnOverlayClick={!submitState.isLoading}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <Box
            position="absolute"
            top="0"
            left="0"
            bg="white"
            opacity="0.7"
            display={submitState.isLoading ? "flex" : "none"}
            flexDirection="column"
            w="full"
            h="full"
            zIndex="overlay"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner color="blue.500" mb={3} size="xl" />
            Loading...
          </Box>
          <ModalHeader>Support us now!</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <ModalBody pb={6}>
              {submitState.error && (
                <Alert mt={4} status="error" rounded="md">
                  <AlertIcon />
                  {submitState.errorMessage}
                </Alert>
              )}
              {submitState.success && (
                <Alert mt={4} status="success" rounded="md">
                  <AlertIcon />
                  You are an official supporter. We will contact you soon!
                </Alert>
              )}
              <FormControl mt={4}>
                <FormLabel color="blue.500">Your name</FormLabel>
                <Input
                  focusBorderColor="yellow.300"
                  value={state.name}
                  required
                  onChange={(event) => onChange("name", event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="blue.500">E-Mail</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<AiOutlineMail />} />
                  <Input
                    placeholder="mail@mail.com"
                    type="email"
                    required
                    focusBorderColor="yellow.300"
                    value={state.email}
                    onChange={(event) => onChange("email", event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="blue.500" display="flex">
                  Phone{" "}
                  <Text color="gray.500" fontSize="sm" ml="4">
                    (optional)
                  </Text>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<AiOutlinePhone />} />
                  <Input
                    placeholder="+123456789"
                    type="text"
                    focusBorderColor="yellow.300"
                    value={state.phone}
                    onChange={(event) => onChange("phone", event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="blue.500" display="flex">
                  Instagram{" "}
                  <Text color="gray.500" fontSize="sm" ml="4">
                    (optional)
                  </Text>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<FaInstagram />} />
                  <Input
                    type="text"
                    focusBorderColor="yellow.300"
                    value={state.instagram}
                    onChange={(event) => onChange("instagram", event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="blue.500" display="flex">
                  Facebook
                  <Text color="gray.500" fontSize="sm" ml="4">
                    (optional)
                  </Text>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<FaFacebook />} />
                  <Input
                    type="text"
                    focusBorderColor="yellow.300"
                    value={state.facebook}
                    onChange={(event) => onChange("facebook", event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="blue.500" display="flex">
                  Notes
                  <Text color="gray.500" fontSize="sm" ml="4">
                    (optional)
                  </Text>
                </FormLabel>

                <Textarea
                  placeholder="Leave us a not if you want..."
                  focusBorderColor="yellow.300"
                  value={state.notes}
                  onChange={(event) => onChange("notes", event.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} disabled={!isValid} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Box as="section" bg="blue.500">
        <Box maxW="2xl" mx="auto" px={{ base: "6", lg: "8" }} py={{ base: "16", sm: "20" }} textAlign="center">
          <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight" color="white">
            Ready to Support us?
          </Heading>
          <Heading color="white" size="lg" fontWeight="light" mt="4">
            Be part of the solution by registering.
          </Heading>

          <Button mt="8" size="lg" fontWeight="bold" bg="yellow.300" onClick={onOpen}>
            Register now
          </Button>
        </Box>
      </Box>
    </>
  );
};
