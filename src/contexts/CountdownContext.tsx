import React, {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState
} from 'react';

import { ChallengesContext } from './ChallengesContext';

const INITIAL_MINUTES = 0.05 * 60;

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  stopCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider: React.FC<CountdownProviderProps> = ({
  children
}: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(INITIAL_MINUTES);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useLayoutEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  const startCountDown = (): void => {
    setIsActive(true);
  };

  const stopCountdown = (): void => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(INITIAL_MINUTES);
  };

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        stopCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
