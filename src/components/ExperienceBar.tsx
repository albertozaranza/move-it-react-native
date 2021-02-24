import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { ChallengesContext } from '../contexts/ChallengesContext';

interface PercentToNextLevel {
  percentToNextLevel: number;
}

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.floor(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <StyledContainer>
      <Text>0xp</Text>
      <StyledProgress>
        <StyledCompletedProgress percentToNextLevel={percentToNextLevel} />
        <StyledCurrentExperience
          percentToNextLevel={percentToNextLevel}
          style={[
            {
              transform: [{ translateX: -16 }]
            }
          ]}
        >
          <Text>{currentExperience}xp</Text>
        </StyledCurrentExperience>
      </StyledProgress>
      <Text>{experienceToNextLevel}xp</Text>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  margin: 32px;
  justify-content: space-between;
  align-items: center;
`;

const StyledProgress = styled.View`
  flex: 8;
  height: 8px;
  margin: 0 8px;
  border-radius: 8px;
  background-color: #c5c5c7;
`;

const StyledCompletedProgress = styled(StyledProgress)<PercentToNextLevel>`
  width: ${({ percentToNextLevel }) => `${percentToNextLevel}%`};
  margin: 0;
  background-color: #4cd62b;
`;

const StyledCurrentExperience = styled.View.attrs({
  style: [
    {
      transform: [{ translateX: -16 }]
    }
  ]
})<PercentToNextLevel>`
  position: absolute;
  top: 12px;
  left: ${({ percentToNextLevel }) => `${percentToNextLevel}%`};
`;

export default ExperienceBar;
