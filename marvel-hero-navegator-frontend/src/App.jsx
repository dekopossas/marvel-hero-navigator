import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Provider from './Context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect from="/" to="login" />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
