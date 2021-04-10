import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Route exact path="/" component={Login} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
