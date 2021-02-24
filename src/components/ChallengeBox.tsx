import React from 'react';
import styled from 'styled-components/native';

import icStartCycle from '../assets/icons/icStartCycle.png';
import challenge from '../assets/images/challenge.png';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <StyledContainer>
      {hasActiveChallenge ? (
        <>
          <StyledActiveChallengeExperience>
            Ganhe 400px
          </StyledActiveChallengeExperience>
          <StyledChallenge source={challenge} />
          <StyledChallengeTitle>Exercite-se</StyledChallengeTitle>
          <StyledChallengeDescription>
            É agora Albertão, bora lá meu parça. Caminhe por 3 minutos e estique
            suas pernas pra você ficar saudável
          </StyledChallengeDescription>
          <StyledButtonsContainer>
            <StyledFailedButton>
              <StyledButtonText>Falhei</StyledButtonText>
            </StyledFailedButton>
            <StyledCompletedButton>
              <StyledButtonText>Completei</StyledButtonText>
            </StyledCompletedButton>
          </StyledButtonsContainer>
        </>
      ) : (
        <>
          <StyledStartCycleTitle>
            Finalize um ciclo {'\n'}
            para receber um desafio
          </StyledStartCycleTitle>
          <StyledDescriptionContainer>
            <StyledArrow source={icStartCycle} />
            <StyledStartCycleDescription>
              Avançe de nível {'\n'}
              completando desafios
            </StyledStartCycleDescription>
          </StyledDescriptionContainer>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  min-height: 300px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px 32px 32px;
  background-color: #fff;
  border-radius: 8px;
`;

const StyledStartCycleTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #666;
`;

const StyledDescriptionContainer = styled.View`
  flex-direction: row;
  margin-top: 32px;
`;

const StyledArrow = styled.Image`
  margin-right: 24px;
`;

const StyledStartCycleDescription = styled.Text`
  font-size: 18px;
  color: #666;
`;

const StyledActiveChallengeExperience = styled.Text`
  width: 100%;
  padding-bottom: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #5965e0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const StyledChallenge = styled.Image`
  margin-top: 16px;
`;

const StyledChallengeTitle = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  font-size: 18px;
  color: #2e384d;
`;

const StyledChallengeDescription = styled.Text`
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  color: #666;
`;

const StyledButtonsContainer = styled.View`
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledButton = styled.TouchableOpacity`
  width: 45%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding: 12px;
  border-radius: 4px;
`;

const StyledButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

const StyledFailedButton = styled(StyledButton)`
  background-color: #e83f5b;
`;

const StyledCompletedButton = styled(StyledButton)`
  background-color: #4cd62b;
`;

export default ChallengeBox;
