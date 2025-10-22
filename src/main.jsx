import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Events from './pages/Events.jsx';
import Vedathon from './pages/Vedathon.jsx';
import CodeVeda from './pages/CodeVeda.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Team from './pages/Team.jsx';
// import Vedathon from './pages/Vedathon.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "events",
        element: <Events />
      },
      {
        path: "events/vedathon",
        element: <Vedathon />
      },
       {
        path: "vedathon",
        element: <Vedathon />
      },
      
      {
        path: "events/codeveda",
        element: <CodeVeda />
      },
       {
        path: "team",
        element: <Team />
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);