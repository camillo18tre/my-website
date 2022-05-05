import Link from 'next/link';
import { useState } from 'react';
import { HamburgerIcon } from './HamburgerIcon';

interface MenuListItem {
  name: string;
  href: string;
}

const menuList: MenuListItem[] = [
  {
    name: 'Home page',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Skills',
    href: '/skills',
  },
  {
    name: 'Portfolio',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const NavbarRight = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Desktop menu */}
      <ul className="hidden gap-5 lg:flex">
        <Menu />
      </ul>
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center w-screen h-screen bg-white lg:hidden">
          <ul>
            <Menu />
          </ul>
        </div>
      )}
    </div>
  );
};

const Menu = () => {
  return (
    <>
      {menuList.map(item => (
        <Link href={item.href} key={item.name}>
          <a>{item.name}</a>
        </Link>
      ))}
    </>
  );
};

export default Menu;
