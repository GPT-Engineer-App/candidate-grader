import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const candidates = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const Candidates = () => (
  <Box p={4}>
    <Heading mb={4}>Candidates</Heading>
    <List spacing={3}>
      {candidates.map((candidate) => (
        <ListItem key={candidate.id}>
          <Link as={RouterLink} to={`/candidate/${candidate.id}`} color="teal.500">
            {candidate.name}
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Candidates;