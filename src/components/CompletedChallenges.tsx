import React from 'react';
import styled from 'styled-components/native';

const CompletedChallenges: React.FC = () => {
  return (
    <StyledContainer>
      <StyledCompletedChallengesLabel>
        Desafios completos
      </StyledCompletedChallengesLabel>
      <StyledCompletedChallengesCounter>0</StyledCompletedChallengesCounter>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 32px;
  padding-bottom: 16px;
  border-bottom-width: 2px;
  border-bottom-color: #c5c5c7;
`;

const StyledCompletedChallengesLabel = styled.Text`
  font-size: 20px;
`;

const StyledCompletedChallengesCounter = styled.Text`
  font-size: 24px;
`;

export default CompletedChallenges;
