import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

const ProgressBar: React.FC = () => {
  return (
    <StyledContainer>
      <Text>0 xp</Text>
      <StyledProgress>
        <StyledCompletedProgress />
        <StyledCurrentExperience
          style={[
            {
              transform: [{ translateX: -16 }]
            }
          ]}
        >
          <Text>300xp</Text>
        </StyledCurrentExperience>
      </StyledProgress>
      <Text>600 xp</Text>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  margin: 48px 32px;
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

const StyledCompletedProgress = styled(StyledProgress)`
  width: 60%;
  margin: 0;
  background-color: #4cd62b;
`;

const StyledCurrentExperience = styled.View.attrs({
  style: [
    {
      transform: [{ translateX: -16 }]
    }
  ]
})`
  position: absolute;
  top: 8px;
  left: 60%;
`;

export default ProgressBar;
