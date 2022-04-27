import React, { useState } from 'react';
import Link from 'next/link';
import { HamburgerIcon } from './HamburgerIcon';
import Menu from './Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen(true);

  return (
    <div className="p-5 flex justify-between">
      <div>
        <Link href="/">
          <a>Camillo Alexandre Bovio</a>
        </Link>
      </div>
      <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
