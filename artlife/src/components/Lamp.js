import React from 'react';
import darkModeIcon from '../assets/dark-mode.png';
import lightModeIcon from '../assets/light-mode.png';
import { useContext } from 'react';
import { MuseumContext } from '../context/GlobalState';

export const Lamp = () => {
  const { darkMode, toggleDarkMode } = useContext(MuseumContext);

  return (
    <img
      src={darkMode ? darkModeIcon : lightModeIcon}
      alt="Lamp"
      onClick={toggleDarkMode}
    />
  );
};
