import { Box, Heading, FormControl, FormLabel, Input, NumberInput, NumberInputField, Textarea, VStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Candidate = () => {
  const { id } = useParams();
  const candidate = { id, name: "John Doe" }; // Dummy data for now

  return (
    <Box p={4}>
      <Heading mb={4}>{candidate.name}</Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading size="md" mb={2}>Manager 1</Heading>
          <FormControl mb={2}>
            <FormLabel>Manager Name</FormLabel>
            <Input placeholder="Enter manager's name" />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Grade (1-10)</FormLabel>
            <NumberInput max={10} min={1}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Comments</FormLabel>
            <Textarea placeholder="Enter comments" />
          </FormControl>
        </Box>
        <Box>
          <Heading size="md" mb={2}>Manager 2</Heading>
          <FormControl mb={2}>
            <FormLabel>Manager Name</FormLabel>
            <Input placeholder="Enter manager's name" />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Grade (1-10)</FormLabel>
            <NumberInput max={10} min={1}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Comments</FormLabel>
            <Textarea placeholder="Enter comments" />
          </FormControl>
        </Box>
        <Box>
          <Heading size="md" mb={2}>Adaptability</Heading>
          <FormControl mb={2}>
            <FormLabel>Grade (1-5)</FormLabel>
            <NumberInput max={5} min={1}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Comments</FormLabel>
            <Textarea placeholder="Enter comments" />
          </FormControl>
        </Box>
        <Box>
          <Heading size="md" mb={2}>Ways of Working</Heading>
          <Box mb={4}>
            <Heading size="sm" mb={2}>Team First</Heading>
            <FormControl mb={2}>
              <FormLabel>Grade (1-5)</FormLabel>
              <NumberInput max={5} min={1}>
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Comments</FormLabel>
              <Textarea placeholder="Enter comments" />
            </FormControl>
          </Box>
          <Box mb={4}>
            <Heading size="sm" mb={2}>Urgency</Heading>
            <FormControl mb={2}>
              <FormLabel>Grade (1-5)</FormLabel>
              <NumberInput max={5} min={1}>
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Comments</FormLabel>
              <Textarea placeholder="Enter comments" />
            </FormControl>
          </Box>
          <Box mb={4}>
            <Heading size="sm" mb={2}>High Agency</Heading>
            <FormControl mb={2}>
              <FormLabel>Grade (1-5)</FormLabel>
              <NumberInput max={5} min={1}>
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Comments</FormLabel>
              <Textarea placeholder="Enter comments" />
            </FormControl>
            <Text mt={2} fontSize="sm" color="gray.500">
              Breaks down our mission into what needs to be done and makes sure it gets done.
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Candidate;