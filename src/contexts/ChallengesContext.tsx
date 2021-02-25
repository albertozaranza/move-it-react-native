import React, { createContext, ReactNode, useState } from 'react';
import { Notifications } from 'react-native-notifications';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  activeChallenge: Challenge | null;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  const levelUp = (): void => {
    setLevel(level + 1);
  };

  const startNewChallenge = (): void => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    Notifications.postLocalNotification({
      title: 'Novo desafio 🎉',
      body: `Valendo ${challenge.amount}xp`,
      identifier: '',
      payload: '',
      sound: '',
      badge: 0,
      thread: '',
      type: ''
    });
  };

  const resetChallenge = (): void => {
    setActiveChallenge(null);
  };

  const completeChallenge = (): void => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(completedChallenges + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        completedChallenges,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
