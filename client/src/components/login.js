import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";

  return (
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
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isErrorPassword ? (
          <FormHelperText>Enter your password.</FormHelperText>
        ) : (
          <FormErrorMessage>password is required.</FormErrorMessage>
        )}
      </FormControl>
      <InputGroup size="md">
        <Button mt={4} colorScheme="red" type="button">
          get guest user credentials
        </Button>
        <InputRightElement width="max">
          <Button mt={4} colorScheme="blue" type="submit">
            Login
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
