import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100%;
`;

const Form = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
`;

export default {
  Container,
  Form,
  Input,
};
