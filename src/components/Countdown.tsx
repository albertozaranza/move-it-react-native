import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';

import icPlayArrow from '../assets/icons/icPlayArrow.png';
import icStop from '../assets/icons/icStop.png';

const INITIAL_MINUTES = 25;

interface IActive {
  active: boolean;
}

const Countdown: React.FC = () => {
  const [time, setTime] = useState(INITIAL_MINUTES * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useLayoutEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (!active) {
      setTime(INITIAL_MINUTES * 60);
    }
  }, [active, time]);

  const handleCountdown = (): void => {
    setActive(!active);
  };

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

      <StyledStartButton active={active} onPress={handleCountdown}>
        <StyledStartButtonText active={active}>
          Iniciar um ciclo
        </StyledStartButtonText>
        {active ? (
          <StyledStop source={icStop} />
        ) : (
          <StyledPlayArrow source={icPlayArrow} />
        )}
      </StyledStartButton>
    </>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
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

const StyledStartButton = styled.TouchableOpacity<IActive>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 24px 0;
  background-color: ${({ active }) => (active ? '#fff' : '#5965e0')};
  border-radius: 8px;
`;

const StyledStartButtonText = styled.Text<IActive>`
  font-size: 18px;
  color: ${({ active }) => (active ? '#666' : '#fff')};
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

export default Countdown;
