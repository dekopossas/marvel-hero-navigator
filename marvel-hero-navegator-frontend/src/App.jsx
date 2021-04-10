import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider>
          <Route exact path="/" component={Login} />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
