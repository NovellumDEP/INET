import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  useEffect(() => {
    // Prevent bouncing on iOS and handle touch events
    const handleTouchMove = (e) => {
      if (!e.target.closest('.scrollable')) {
        e.preventDefault();
      }
    };

    document.body.addEventListener('touchmove', handleTouchMove, { 
      passive: false
    });

    // Clean up
    return () => {
      document.body.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative max-w-full">
      <Navbar className="sticky top-0 z-50 w-full" />
      <main className="flex-grow relative w-full overflow-x-clip">
        <div className="scrollable relative w-full overscroll-none">
          <Outlet />
        </div>
      </main>
      <Footer className="w-full" />
    </div>
  );
};

export default Layout;