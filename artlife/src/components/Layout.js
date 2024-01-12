import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { MuseumContext } from '../context/GlobalState';

export const Layout = () => {
  const { darkMode } = useContext(MuseumContext);

  const toggleBodyClass = () => {
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    toggleBodyClass();
  }, [darkMode]);

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
