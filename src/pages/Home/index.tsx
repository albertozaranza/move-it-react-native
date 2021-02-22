import React from 'react';
import { Image } from 'react-native';

import { ProgressBar } from '../../components';

import { StyledContainer, StyledLogoContainer, StyledTitle } from './styles';

import logo from '../../assets/images/logo.png';

const Home: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <Image source={logo} />
        <StyledTitle>Move.it</StyledTitle>
      </StyledLogoContainer>
      <ProgressBar />
    </StyledContainer>
  );
};

export default Home;
