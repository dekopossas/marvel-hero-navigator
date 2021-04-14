import React, { useState } from 'react';
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
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleClickHideShowBtn = () => setShow(!show);

  const history = useHistory();

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    const PASSOWARD_MIN_LENGTH = 6;

    if (value.length >= PASSOWARD_MIN_LENGTH) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleClickLogin = async () => {
    const response = await api.post('users', { email, password });
    if (response) {
      history.push('/home');
    }
  };

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
          onChange={handleChangeEmail}
        />
        <InputGroup size="md" width="300px">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            data-testid="password-input"
            onChange={handleChangePassword}
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
            disabled={!(isEmailValid && isPasswordValid)}
          >
            <Link to="/home">Join</Link>
          </Button>
          <Link width="300px" to="/register">
            <Button
              width="300px"
              colorScheme="blue"
              to="/register"
              data-testid="no-account-btn"
              type="button"
            >
              Register
            </Button>
          </Link>
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
