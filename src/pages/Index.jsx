import { Container, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Candidate Grading App</Text>
        <Link as={RouterLink} to="/candidates" color="teal.500">
          View Candidates
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;