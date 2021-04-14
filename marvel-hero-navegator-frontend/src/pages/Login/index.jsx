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
  const handleClickHideShowBtn = () => setShow(!show);

  const handleClickLogin = () => {};

  return (
    <div className="text-center">
      <Stack spacing={3} align="center">
        <Text fontSize="5xl">Login</Text>
        <Input
          className="form-control"
          type="email"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          width="300px"
        />
        <InputGroup size="md" width="300px">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            data-testid="password-input"
            id="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickHideShowBtn}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Stack spacing={2} align="center">
          <Button
            width="300px"
            colorScheme="green"
            type="button"
            data-testid="signin-btn"
            onclick={handleClickLogin}
          >
            <Link to="/home">Join</Link>
          </Button>
          <Button
            width="300px"
            colorScheme="blue"
            to="/register"
            data-testid="no-account-btn"
            type="button"
          >
            <Link to="/register">Register</Link>
          </Button>
        </Stack>
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
