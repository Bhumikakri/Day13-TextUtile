import React from 'react';
import './App.css';
import Main from './component/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import AboutUs from './component/About/AboutUs';
import Contact from './component/Contact/Contact';
import { DarkModeProvider } from './component/DarkModeContext';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/About',
          element: <AboutUs />
        },
        {
          path: '/Contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <DarkModeProvider>
        <RouterProvider router={routes} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
