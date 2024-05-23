import { Box, Heading, FormControl, FormLabel, Input, Textarea, VStack, Link, Flex, Text, HStack, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StarRating = ({ max, value, onChange }) => {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <IconButton
        key={i}
        icon={<StarIcon />}
        color={i <= value ? "yellow.400" : "gray.300"}
        onClick={() => onChange(i)}
        variant="ghost"
        size="lg"
      />
    );
  }
  return <HStack>{stars}</HStack>;
};

const Candidate = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [manager1Grade, setManager1Grade] = useState(0);
  const [manager2Grade, setManager2Grade] = useState(0);
  const [adaptabilityGrade, setAdaptabilityGrade] = useState(0);
  const [teamFirstGrade, setTeamFirstGrade] = useState(0);
  const [urgencyGrade, setUrgencyGrade] = useState(0);
  const [highAgencyGrade, setHighAgencyGrade] = useState(0);

  useEffect(() => {
    // Simulate fetching candidate data
    const fetchCandidate = async () => {
      // Simulated data fetching delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setCandidate({ id, name: "John Doe" }); // Replace with actual data fetching logic
    };

    fetchCandidate();
  }, [id]);

  return (
    <Box>
      <Flex as="header" width="100%" padding="4" bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
        <Heading size="lg">Candidate Grading App</Heading>
        <Link as={RouterLink} to="/candidates" color="white" fontWeight="bold">
          Back to Candidates
        </Link>
      </Flex>
      <Box p={4}>
        {candidate ? (
          <>
            <Heading mb={4}>{candidate.name}</Heading>
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading size="md" mb={4}>Manager Feedback</Heading>
                <Box mb={4}>
                  <Heading size="sm" mb={2}>Manager 1</Heading>
                  <FormControl mb={2}>
                    <FormLabel>Manager Name</FormLabel>
                    <Input placeholder="Enter manager's name" />
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel>Grade (1-5)</FormLabel>
                    <StarRating max={5} value={manager1Grade} onChange={setManager1Grade} />
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel>Comments</FormLabel>
                    <Textarea placeholder="Enter comments" />
                  </FormControl>
                </Box>
                <Box mb={4}>
                  <Heading size="sm" mb={2}>Manager 2</Heading>
                  <FormControl mb={2}>
                    <FormLabel>Manager Name</FormLabel>
                    <Input placeholder="Enter manager's name" />
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel>Grade (1-5)</FormLabel>
                    <StarRating max={5} value={manager2Grade} onChange={setManager2Grade} />
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel>Comments</FormLabel>
                    <Textarea placeholder="Enter comments" />
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Heading size="md" mb={2}>Adaptability</Heading>
                <FormControl mb={2}>
                  <FormLabel>Grade (1-5)</FormLabel>
                  <StarRating max={5} value={adaptabilityGrade} onChange={setAdaptabilityGrade} />
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
                    <StarRating max={5} value={teamFirstGrade} onChange={setTeamFirstGrade} />
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
                    <StarRating max={5} value={urgencyGrade} onChange={setUrgencyGrade} />
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
                    <StarRating max={5} value={highAgencyGrade} onChange={setHighAgencyGrade} />
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
          </>
        ) : (
          <Heading>Loading...</Heading>
        )}
      </Box>
    </Box>
  );
};

export default Candidate;