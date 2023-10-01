import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/login";
import Singup from "../components/singup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent className="class-login">
      <Box>
        <Text>Chat App</Text>
      </Box>
      <Tabs isFitted variant="enclosed" className="class-tabs">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Create account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Singup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Homepage;
