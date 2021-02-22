import React from 'react';
import { Image, StatusBar } from 'react-native';

import { ProgressBar } from '../../components';

import { StyledContainer, StyledLogoContainer, StyledTitle } from './styles';

import logo from '../../assets/images/logo.png';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5965e0" />
      <StyledContainer>
        <StyledLogoContainer>
          <Image source={logo} />
          <StyledTitle>Move.it Mobile</StyledTitle>
        </StyledLogoContainer>
        <ProgressBar />
      </StyledContainer>
    </>
  );
};

export default Home;
