import React, { useContext } from 'react';
import styled from 'styled-components/native';

import {
  ExperienceBar,
  Profile,
  Countdown,
  CompletedChallenges,
  ChallengeBox
} from '../components';

import { AuthContext } from '../contexts/AuthContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import icArrowLeftWhite from '../assets/icons/icArrowLeftWhite.png';
import logo from '../assets/images/logo.png';

const Home: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <StyledLogoContainer>
        <StyledGoBack onPress={signOut}>
          <StyledGoBackIcon source={icArrowLeftWhite} />
        </StyledGoBack>
        <StyledImage source={logo} />
        <StyledEmptyView />
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
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #5965e0;
`;

const StyledImage = styled.Image`
  height: 38px;
  width: 180px;
  margin: 8px 0;
`;

const StyledSection = styled.View``;

const StyledGoBack = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
`;

const StyledGoBackIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

const StyledEmptyView = styled.View`
  height: 24px;
  width: 24px;
`;

export default Home;
