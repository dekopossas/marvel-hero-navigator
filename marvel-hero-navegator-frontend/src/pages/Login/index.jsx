import React from 'react';
import {
  Button,
  HStack,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="text-center">
      <Stack spacing={3}>
        <Text fontSize="5xl">Login</Text>
        <Input
          className="form-control"
          type="email"
          id="email"
          data-testid="email-input"
          placeholder="Email"
        />
        <InputGroup size="md">
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
        <Link to="/home">
          <Button colorScheme="green" type="button" data-testid="signin-btn">
            Join
          </Button>
        </Link>
        <br />
        <Link to="/register">
          <Button colorScheme="blue" to="/register" data-testid="no-account-btn" type="button">
            Register
          </Button>
        </Link>
        <HStack>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </HStack>
        <p className="mt-5 mb-3 text-muted">© Marvel Hero Navegator 2021</p>
      </Stack>
    </div>
  );
}

export default Login;
