import React from 'react';
import {
  Text,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Stack spacing={3} align="center">
        <Text fontSize="5xl">Register</Text>
        <Input placeholder="Email" width="300px" />
        <InputGroup size="md" width="300px">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            data-testid="password-input"
            id="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Stack>
    </div>
  );
}

export default Register;
