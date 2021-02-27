import React, { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

interface GithubResponseData {
  name?: string;
  avatar_url?: string;
}

interface GithubResponse {
  data?: GithubResponseData;
  message?: string;
}

interface AuthContextData {
  isSigned: boolean;
  isLoading: boolean;
  hasError: boolean;
  githubUser: GithubResponseData | null;
  signIn: (username: string) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {
  const [isSigned, setIsSigned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [githubUser, setGithubUser] = useState<GithubResponseData | null>(null);

  const signIn = async (username: string): Promise<void> => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response: GithubResponse = await api.get(`/users/${username}`);

      if (response?.message === 'Not Found') {
        setHasError(true);
      } else {
        setGithubUser({
          name: response.data?.name,
          avatar_url: response.data?.avatar_url
        });
      }

      setIsLoading(false);
      setIsSigned(true);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const signOut = (): void => {
    setIsSigned(false);
  };

  return (
    <AuthContext.Provider
      value={{ isSigned, isLoading, hasError, githubUser, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
