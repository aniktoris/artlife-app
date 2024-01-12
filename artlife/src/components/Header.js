import React from 'react';
import { NavLink } from 'react-router-dom';
import { Lamp } from './Lamp';

export const Header = () => {
  const activeStyles = {
    textDecoration: 'underline',
    color: '#FFFFFF',
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">#ARTLIFE</h1>
        <nav className="nav-bar">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/arts"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            ARTS
          </NavLink>
          <NavLink
            to="/exhibitions"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            EXHIBITIONS
          </NavLink>
          <NavLink
            to="/artlist"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            ARTLIST
          </NavLink>
        </nav>
        <Lamp />
      </header>
    </div>
  );
};
