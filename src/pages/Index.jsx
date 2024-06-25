import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ ...cvData, [name]: value });
  };

  const handleSave = () => {
    // Save CV data to local storage or backend
    console.log("CV Data Saved:", cvData);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">CV Builder</Heading>
        <Input placeholder="Name" name="name" value={cvData.name} onChange={handleChange} />
        <Input placeholder="Email" name="email" value={cvData.email} onChange={handleChange} />
        <Input placeholder="Phone" name="phone" value={cvData.phone} onChange={handleChange} />
        <Textarea placeholder="Summary" name="summary" value={cvData.summary} onChange={handleChange} />
        <Textarea placeholder="Experience" name="experience" value={cvData.experience} onChange={handleChange} />
        <Textarea placeholder="Education" name="education" value={cvData.education} onChange={handleChange} />
        <Textarea placeholder="Skills" name="skills" value={cvData.skills} onChange={handleChange} />
        <Button colorScheme="blue" onClick={handleSave}>Save CV</Button>
      </VStack>
      <Box mt={10} p={5} borderWidth={1} borderRadius="md" width="100%">
        <Heading as="h2" size="lg" mb={4}>Preview</Heading>
        <Text><strong>Name:</strong> {cvData.name}</Text>
        <Text><strong>Email:</strong> {cvData.email}</Text>
        <Text><strong>Phone:</strong> {cvData.phone}</Text>
        <Text><strong>Summary:</strong> {cvData.summary}</Text>
        <Text><strong>Experience:</strong> {cvData.experience}</Text>
        <Text><strong>Education:</strong> {cvData.education}</Text>
        <Text><strong>Skills:</strong> {cvData.skills}</Text>
      </Box>
    </Container>
  );
};

export default Index;