import React from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider } from './contexts/AuthContext';

import Router from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5965e0" />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};

export default App;
