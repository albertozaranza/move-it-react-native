import React from 'react';
import styled from 'styled-components/native';

import {
  ExperienceBar,
  Profile,
  Countdown,
  CompletedChallenges,
  ChallengeBox
} from '../components';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import logo from '../assets/images/logo.png';

const Home: React.FC = () => {
  return (
    <>
      <StyledLogoContainer>
        <StyledImage source={logo} />
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

const StyledImage = styled.Image`
  height: 38px;
  width: 180px;
  margin: 8px 0;
`;

const StyledSection = styled.View``;

export default Home;
