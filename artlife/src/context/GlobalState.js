import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favorites: [],
  darkMode: false,
};

export const MuseumContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavorites = (id) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: id,
    });
  };

  const deleteFavorites = (id) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id,
    });
  };

  const toggleDarkMode = () => {
    dispatch({
      type: 'TOGGLE_DARK_MODE',
    });
  };

  return (
    <MuseumContext.Provider
      value={{
        favorites: state.favorites,
        darkMode: state.darkMode,
        addFavorites,
        deleteFavorites,
        toggleDarkMode,
      }}
    >
      {children}
    </MuseumContext.Provider>
  );
};
