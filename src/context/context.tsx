"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface GeneralContextType {
  textYPosition: number;
  setTextYPosition: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondCircleComplete:React.Dispatch<React.SetStateAction<boolean[]>>;
  secondCircleComplete: boolean[];
  isMobile2: boolean;
  setIsMobile2: React.Dispatch<React.SetStateAction<boolean>>;
  handleCircleComplete: (index: number, value: boolean) => void;
  count:number,
  setCount:React.Dispatch<React.SetStateAction<number>>
  clickedImage:number | null,
  setClickedImage:React.Dispatch<React.SetStateAction<number | null>>
}

// Create the context
export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

// Create a provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the value state
  const [textYPosition, setTextYPosition] = useState<number>(0);

  const [count, setCount] = useState(0)

  // Detect mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const [isMobile2, setIsMobile2] = useState<boolean>(true);

  const [clickedImage, setClickedImage] = useState<number | null>(null)

  const [secondCircleComplete, setSecondCircleComplete] = useState<boolean[]>(
    Array.from({ length: 7 }, () => false)
  );

  const handleCircleComplete = (index: number, value: boolean) => {
    setSecondCircleComplete((prev) => {
      const newState = [...prev]; // Create a copy of the previous state array
      newState[index] = value; // Update the value at the specified index
      return newState; // Return the new state array
    });
  };
  
  

  useEffect(() => {
    const handleScroll = () => {
      setIsMobile(window.innerWidth <= 655);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobile2(window.innerWidth <= 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('is mobile', isMobile);
  }, [isMobile]);

  const contextValue = {
    textYPosition,
    setTextYPosition,
    isMobile,
    setIsMobile,
    secondCircleComplete,
    setSecondCircleComplete,
    isMobile2,
    setIsMobile2,
    handleCircleComplete,
    count, setCount,
    clickedImage,
    setClickedImage
  };

  return <GeneralContext.Provider value={contextValue}>{children}</GeneralContext.Provider>;
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a ContextProvider');
  }
  return context;
};