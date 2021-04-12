import React, { useState } from 'react';
import {
  Text,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

function Register() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleClick = () => setShow(!show);

  const handleChangeEmail = (event, value) => {
    setEmail(value);
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleChangePassword = (event, value) => {
    setPassword(value);
    const PASSOWARD_MIN_LENGTH = 6;

    if (value.length >= PASSOWARD_MIN_LENGTH) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  

  return (
    <div>
      <Stack spacing={3} align="center">
        <Text fontSize="5xl">Register</Text>
        <Input
          placeholder="Email"
          width="300px"
          onChange={handleChangeEmail}
        />
        <InputGroup size="md" width="300px">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            data-testid="password-input"
            id="password"
            onChange={handleChangePassword}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          size="lg"
          colorScheme="green"
          mt="24px"
          disabled={!(isEmailValid && isPasswordValid)}
        >
          Create a free account
        </Button>
      </Stack>
    </div>
  );
}

export default Register;
