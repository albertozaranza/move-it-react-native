import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { ChallengesContext } from '../contexts/ChallengesContext';

import icArrowUp from '../assets/icons/icArrowUp.png';

const PROFILE_PICTURE =
  'https://media-exp1.licdn.com/dms/image/C5603AQGGogTQqX6YrA/profile-displayphoto-shrink_800_800/0/1611184699396?e=1619654400&v=beta&t=HkGYf00wWxM9F-RRQRJKliRIwzJqiIuDhVt0MuuPX0s';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <StyledContainer>
      <StyledAvatar source={{ uri: PROFILE_PICTURE }} />
      <StyledUserDetails>
        <StyledUserName>Alberto Zaranza</StyledUserName>
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
