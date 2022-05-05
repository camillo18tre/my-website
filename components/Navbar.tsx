import React, { useState } from 'react';
import { NavbarRight } from './Menu';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <Logo />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
