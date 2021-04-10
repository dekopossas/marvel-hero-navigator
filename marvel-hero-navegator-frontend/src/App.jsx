import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Provider from './Context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Redirect from="/" to="login" />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
