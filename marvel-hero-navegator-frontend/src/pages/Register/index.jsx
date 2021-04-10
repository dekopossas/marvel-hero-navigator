import React from 'react';
import {
  Text,
  Stack,
  Input,
  Button,
} from '@chakra-ui/react';

function Register() {
  return (
    <div>
      <Stack spacing={3}>
        <Text fontSize="5xl">Register</Text>
        <Input placeholder="Email" />
        <Input placeholder="Passworld" />
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Stack>
    </div>
  );
}

export default Register;
