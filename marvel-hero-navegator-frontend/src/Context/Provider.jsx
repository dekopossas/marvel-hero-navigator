import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './Context';

function GlobalProvider({ children }) {
  const [login, setLogin] = useState([]);

  const contextState = {
    login,
    setLogin,
  };

  return (
    <ContextAPI.Provider value={contextState}>
      { children }
    </ContextAPI.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
