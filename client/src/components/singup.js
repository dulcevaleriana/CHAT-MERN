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

export default function Singup() {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const isErrorName = name === "";
  const isErrorFile = file === "";
  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  const isErrorConfirmPassword = confirmPassword === "";

  return (
    <form>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isErrorName ? (
          <FormHelperText>Enter your user name.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Upload Picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          p={1.5}
          onChange={(e) => setFile(e.target.value[0])}
        />
        {!isErrorFile ? (
          <FormHelperText>Enter your user name.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
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
            value={password}
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
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            value={confirmPassword}
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isErrorConfirmPassword ? (
          <FormHelperText>
            Enter your password again to confirm password.
          </FormHelperText>
        ) : (
          <FormErrorMessage>password is required.</FormErrorMessage>
        )}
      </FormControl>
      <InputGroup>
        <InputRightElement width="max">
          <Button mt={4} colorScheme="teal" type="submit">
            Create Account
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
