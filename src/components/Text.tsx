import React from 'react';
import { Text as NativeText } from 'react-native';

const Text: React.FC = ({ children }) => {
  return <NativeText>{children}</NativeText>;
};

export default Text;
