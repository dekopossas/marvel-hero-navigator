import React from 'react';
import { Button, HStack, Stack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="text-center">
      <Stack>
        <h1 className="h1 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="email">
          <input
            className="form-control"
            type="email"
            id="email"
            data-testid="email-input"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <Link to="/home">
          <Button
            colorScheme="green"
            type="button"
            data-testid="signin-btn"
          >
            Entrar
          </Button>
        </Link>
        <br />
        <Link to="/register">
          <Button
            colorScheme="blue"
            to="/register"
            data-testid="no-account-btn"
            type="button"
          >
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
