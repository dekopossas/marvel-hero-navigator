import React, { useState } from 'react';
import {
  Text,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  AlertIcon,
  Alert,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function Register() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [userExist, setUserExist] = useState('');

  const history = useHistory();

  const handleClickHideShowBtn = () => setShow(!show);

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

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
    const regex = /^[A-Za-z'\s]+$/;
    const MIN_NAME_LENGTH = 3;
    if (regex.test(value) && value.length >= MIN_NAME_LENGTH) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  const handleClickRegisterBtn = async () => {
    const response = await api.post('POST', { name, email, password });
    if (response) {
      setUserExist('sucess');
      setTimeout(history.push('/login'), 2000);
    }
    setUserExist(true);
  };

  const showAlert = (status) => {
    if (status === 'exist') {
      <Alert status="error">
        <AlertIcon />
        Email already registered!
      </Alert>;
    }
    if (status === 'sucess') {
      <Alert status="success">
        <AlertIcon />
        Accont Created!
      </Alert>;
    }
  };

  return (
    <div>
      <Stack spacing={3} align="center">
        <Text fontSize="5xl">Register</Text>
        <Input placeholder="Name" width="300px" onChange={handleChangeName} />
        <Input placeholder="Email" width="300px" onChange={handleChangeEmail} />
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
            <Button h="1.75rem" size="sm" onClick={handleClickHideShowBtn}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          size="lg"
          colorScheme="green"
          mt="24px"
          onClick={handleClickRegisterBtn}
          disabled={!(isEmailValid && isPasswordValid && isNameValid)}
        >
          Create a free account
        </Button>
        {showAlert(userExist)}
      </Stack>
    </div>
  );
}

export default Register;
