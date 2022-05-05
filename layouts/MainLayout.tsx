import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 p-5 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
};
