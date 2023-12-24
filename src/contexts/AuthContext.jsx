// src/contexts/AuthContext.js

import { createContext, useContext, useEffect, useState } from 'react';
import { pb } from '../services/PocketBaseService';
import PropTypes from 'prop-types';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: pb.authStore.isValid,
    user: pb.authStore.model,
  });

  console.log(authState);

  useEffect(() => {
    // Registriere einen Listener auf Änderungen im Authentifizierungsstatus
    const unsubscribe = pb.authStore.onChange(() => {
      // Aktualisiere den Zustand, wenn sich die Auth-Daten ändern
      setAuthState({
        isAuthenticated: pb.authStore.isValid,
        user: pb.authStore.model,
      });
    });

    // Cleanup-Function, um den Listener wieder abzumelden
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { AuthProvider };