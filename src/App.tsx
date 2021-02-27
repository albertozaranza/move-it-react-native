import React from 'react';
import { StatusBar } from 'react-native';
import Router from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5965e0" />
      <Router />
    </>
  );
};

export default App;
