import React from 'react';
import styled from 'styled-components/native';

import icGithub from '../assets/icons/icGithub.png';
import icArrowRightWhite from '../assets/icons/icArrowRightWhite.png';
import backgroundLogin from '../assets/images/backgroundLogin.png';
import logo from '../assets/images/logo.png';

const SignIn: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBackgroundImage source={backgroundLogin} />
      <StyledImage source={logo} />
      <StyledTextContainer>
        <StyledWelcome>Bem-vindo</StyledWelcome>
        <StyledDescriptionContainer>
          <StyledGithubIcon source={icGithub} />
          <StyledDescription>
            Digite seu usuário no Github para começar
          </StyledDescription>
        </StyledDescriptionContainer>
      </StyledTextContainer>
      <StyledTextInputContainer>
        <StyledTextInput />
        <StyledTextInputButton>
          <StyledTextInputIcon source={icArrowRightWhite} />
        </StyledTextInputButton>
      </StyledTextInputContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})`
  background-color: #5965e0;
  position: relative;
`;

const StyledBackgroundImage = styled.Image`
  position: absolute;
`;

const StyledImage = styled.Image`
  height: 50px;
  width: 240px;
`;

const StyledTextContainer = styled.View`
  margin: 0 64px;
`;

const StyledWelcome = styled.Text`
  margin: 100px 0 24px;
  font-size: 36px;
  color: #fff;
`;

const StyledDescriptionContainer = styled.View`
  margin: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledGithubIcon = styled.Image``;

const StyledDescription = styled.Text`
  margin: 0 8px;
  font-size: 16px;
  color: #b2b9ff;
`;

const StyledTextInputContainer = styled.View`
  height: 48px;
  margin: 32px;
  flex-direction: row;
`;

const StyledTextInput = styled.TextInput.attrs({
  selectionColor: '#fff'
})`
  flex: 8;
  padding: 0 16px;
  color: #fff;
  border-width: 1px;
  border-color: #4953b8;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const StyledTextInputButton = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #4953b8;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const StyledTextInputIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export default SignIn;
