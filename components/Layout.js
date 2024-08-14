import { Box, Container } from "@chakra-ui/react";

const layout = ({ children }) => (
  <Container maxW="container.md" py={4}>
    <Box as="header" mb={8}>
      <h1>Notes App</h1>
    </Box>
    <main>{children}</main>
  </Container>
);

export default layout;
