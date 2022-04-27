import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <div className="p-5 lg:px-20 flex-1">{children}</div>
      <Footer />
    </div>
  );
};
