import React from 'react';
import { Image, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import {
  ExperienceBar,
  Profile,
  Countdown,
  CompletedChallenges,
  ChallengeBox
} from './components';

import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';

import logo from './assets/images/logo.png';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5965e0" />
      <StyledLogoContainer>
        <Image source={logo} />
        <StyledTitle>Move.it Mobile</StyledTitle>
      </StyledLogoContainer>
      <StyledContainer>
        <ChallengesProvider>
          <ExperienceBar />
          <CountdownProvider>
            <StyledSection>
              <Profile />
              <CompletedChallenges />
              <Countdown />
              <ChallengeBox />
            </StyledSection>
          </CountdownProvider>
        </ChallengesProvider>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center'
  }
})`
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
