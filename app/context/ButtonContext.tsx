'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ButtonContextType {
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
}

// Создание контекста с начальным значением
const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

interface ButtonProviderProps {
  children: ReactNode;
}

// Провайдер контекста
export const ButtonProvider: React.FC<ButtonProviderProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Хук для использования контекста
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (context === undefined) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};