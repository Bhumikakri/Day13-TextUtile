// Main.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
import { useDarkMode } from './DarkModeContext';

const Main = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode?'Main':'darkMain'}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
