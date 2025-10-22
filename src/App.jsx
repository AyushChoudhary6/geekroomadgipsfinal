import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Layout/Footer';
import MouseGlow from './components/MouseGlow';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Mouse glow sits at the top level so it can cover the viewport */}
      <MouseGlow />

      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;