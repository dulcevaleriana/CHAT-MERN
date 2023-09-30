import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";

  return (
    <Container maxW="xl" centerContent className="class-login">
      <Box>
        <Text>Chat App</Text>
      </Box>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isErrorEmail ? (
            <FormHelperText>Enter your email account.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isErrorPassword ? (
            <FormHelperText>Enter your password.</FormHelperText>
          ) : (
            <FormErrorMessage>password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Homepage;
