import React from 'react';
import { Image, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { ExperienceBar, Profile, Countdown } from './components';

import logo from './assets/images/logo.png';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5965e0" />
      <StyledContainer>
        <StyledLogoContainer>
          <Image source={logo} />
          <StyledTitle>Move.it Mobile</StyledTitle>
        </StyledLogoContainer>
        <ExperienceBar />
        <StyledSection>
          <Profile />
          <Countdown />
        </StyledSection>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #e5e5e5;
`;

const StyledLogoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #5965e0;
`;

const StyledTitle = styled.Text`
  margin-left: 8px;
  color: #ffffff;
  font-size: 32px;
`;

const StyledSection = styled.View``;

export default App;
