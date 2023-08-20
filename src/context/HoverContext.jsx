// HoverContext.js
import React, { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export const useHoverContext = () => {
  return useContext(HoverContext);
};

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleNavItemHover = () => {
    setIsHovered(true);
  };

  const handleNavItemLeave = () => {
    setIsHovered(false);
  };

  return (
    <HoverContext.Provider value={{ isHovered, handleNavItemHover, handleNavItemLeave }}>
      {children}
    </HoverContext.Provider>
  );
};
