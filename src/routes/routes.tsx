import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, Home } from '../screens';

const Stack = createStackNavigator();

const Router: React.FC = () => {
  const isSigned = false;

  return (
    <>
      {isSigned ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Router;
