import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { CountdownContext } from '../contexts/CountdownContext';

import icPlayArrow from '../assets/icons/icPlayArrow.png';
import icStop from '../assets/icons/icStop.png';
import icHasFinished from '../assets/icons/icHasFinished.png';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    stopCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <StyledContainer>
        <StyledNumberContainer>
          <StyledRightNumber>{minuteLeft}</StyledRightNumber>
        </StyledNumberContainer>
        <StyledNumberContainer>
          <StyledLeftNumber>{minuteRight}</StyledLeftNumber>
        </StyledNumberContainer>

        <StyledDots>:</StyledDots>

        <StyledNumberContainer>
          <StyledRightNumber>{secondLeft}</StyledRightNumber>
        </StyledNumberContainer>
        <StyledNumberContainer>
          <StyledLeftNumber>{secondRight}</StyledLeftNumber>
        </StyledNumberContainer>
      </StyledContainer>

      {hasFinished ? (
        <StyledFinishedButton disabled>
          <StyledFinishedButtonText>Ciclo encerrado</StyledFinishedButtonText>
          <StyledFinished source={icHasFinished} />
        </StyledFinishedButton>
      ) : (
        <>
          {isActive ? (
            <StyledStopButton onPress={stopCountdown}>
              <StyledStopButtonText>Abandonar um ciclo</StyledStopButtonText>
              <StyledStop source={icStop} />
            </StyledStopButton>
          ) : (
            <StyledStartButton onPress={startCountDown}>
              <StyledStartButtonText>Iniciar um ciclo </StyledStartButtonText>
              <StyledPlayArrow source={icPlayArrow} />
            </StyledStartButton>
          )}
        </>
      )}
    </>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 32px 0;
`;

const StyledNumberContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
`;

const StyledDots = styled.Text`
  font-size: 48px;
  margin: 0 8px;
`;

const StyledRightNumber = styled.Text`
  padding: 24px;
  font-size: 48px;
  border-right-width: 1px;
  border-right-color: #e5e5e5;
`;

const StyledLeftNumber = styled.Text`
  padding: 24px;
  font-size: 48px;
  border-left-width: 1px;
  border-left-color: #e5e5e5;
`;

const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 32px 0;
  padding: 24px 0;
  border-radius: 8px;
`;

const StyledButtonText = styled.Text`
  font-size: 18px;
`;

const StyledStartButton = styled(StyledButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background-color: #5965e0;
  border-radius: 8px;
`;

const StyledStartButtonText = styled(StyledButtonText)`
  color: #fff;
`;

const StyledStopButton = styled(StyledButton)`
  background-color: #fff;
`;

const StyledStopButtonText = styled(StyledButtonText)`
  color: #666;
`;

const StyledFinishedButton = styled(StyledButton)`
  background-color: #fff;
  border-bottom-width: 4px;
  border-bottom-color: #4cd62b;
`;

const StyledFinishedButtonText = styled(StyledButtonText)`
  color: #666;
`;

const StyledPlayArrow = styled.Image`
  height: 24px;
  width: 24px;
`;

const StyledStop = styled.Image`
  margin-left: 8px;
  height: 14px;
  width: 14px;
`;

const StyledFinished = styled.Image`
  margin-left: 8px;
`;

export default Countdown;
