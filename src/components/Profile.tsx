import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { AuthContext } from '../contexts/AuthContext';

import icArrowUp from '../assets/icons/icArrowUp.png';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  const { githubUser } = useContext(AuthContext);

  return (
    <StyledContainer>
      <StyledAvatar source={{ uri: githubUser?.avatar_url }} />
      <StyledUserDetails>
        <StyledUserName>{githubUser?.name}</StyledUserName>
        <StyledLevelContainer>
          <StyledArrow source={icArrowUp} />
          <Text>Nível {level}</Text>
        </StyledLevelContainer>
      </StyledUserDetails>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 32px 16px;
`;

const StyledUserDetails = styled.View`
  margin-left: 24px;
`;

const StyledUserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const StyledLevelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledArrow = styled.Image`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

const StyledAvatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export default Profile;
