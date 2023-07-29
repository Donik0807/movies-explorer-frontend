import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const allowedPaths = ['/', '/movies', '/saved-movies', '/profile'];

export default function Header() {
  const { pathname } = useLocation();

  if (!allowedPaths.includes(pathname)) {
    return;
  }

  return (
    <header className='header'>
      <Link className='header__logo-link' to='/'>
        <img className='header__logo' src={logo} alt='логотип' />
      </Link>
      <Navigation></Navigation>
    </header>
  );
}
