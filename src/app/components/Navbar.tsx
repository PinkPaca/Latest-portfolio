'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navLink, navLinkList } from '../Models/Models';
import MenuOverlay from './MenuOverlay';

const navLinks: navLinkList = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

type Props = {};

const Navbar = (props: Props) => {
  const [checked, setChecked] = React.useState(true);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 bg-opacity-90 z-10 bg-basic-color">
        <div className="flex flex-wap item-center justify-between mx-auto px-4 py-2 mb-0">
          <Link href={'/'}>
            <Image
              src="/images/navLogo.png"
              alt="Logo"
              width={100}
              height={50}
              className="color-basic-color"
            />
          </Link>
          <div className="mobile-menu block md:hidden my-auto">
            {navbarOpen ? (
              <button onClick={() => setNavbarOpen(false)}>
                <CloseIcon fontSize="large" />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(true)}>
                <MenuIcon fontSize="large" sx={{ color: '#219C90' }} />
              </button>
            )}
          </div>
          <div
            className="menu hidden md:block md:w-auto md:my-auto"
            id="navbar"
          >
            <ul className="md:flex text-lg md:space-x-8">
              {navLinks.map((link: navLink, index: number) => {
                return (
                  <li key={index} className="text-xl">
                    {' '}
                    <NavLink href={link.path} title={link.title} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:flex space-x-0.5 my-auto">
            <p className="my-auto text-primary-color font-serif text-sm">ENG</p>
            <Switch
              color="default"
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="my-auto text-primary-color font-serif text-sm">KOR</p>
          </div>
        </div>
        <span className="bg-opacity-80 bg-quaternary-color mt-0 flex text-white justify-end text-xs">
          @PinkPaca
        </span>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
