import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [currentUser] = React.useContext(CurrentUserContext);
  return (
    <>
      <nav
        className={`header__navigation ${
          currentUser ? 'header__navigation_burger' : ''
        } ${isMenuOpen ? 'header__navigation_open' : ''}`}
      >
        <ul
          className={`header__navigation-list ${
            currentUser ? 'header__navigation-list_burger' : ''
          }`}
        >
          {currentUser ? (
            <>
              <li className='header__navigation-item' onClick={toggleMenu}>
                <NavLink
                  to='/'
                  className='link header__main-link link-animation'
                >
                  Главная
                </NavLink>
              </li>
              <li className='header__navigation-item' onClick={toggleMenu}>
                <NavLink
                  to='/movies'
                  className='link header__films-link link-animation'
                >
                  Фильмы
                </NavLink>
              </li>
              <li className='header__navigation-item' onClick={toggleMenu}>
                <NavLink
                  to='/saved-movies'
                  className='link header__saved-films link-animation'
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className='header__navigation-item' onClick={toggleMenu}>
                <NavLink
                  to='/profile'
                  className='link header__profile-link link-animation'
                >
                  Аккаунт
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className='header__navigation-item'>
                <Link
                  to='/signup'
                  className='link header__register-link link-animation'
                >
                  Регистрация
                </Link>
              </li>
              <li className='header__navigation-item'>
                <Link
                  to='/signin'
                  className='link header__login-link link-animation'
                >
                  Войти
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {currentUser && (
        <button
          onClick={toggleMenu}
          className={`header__toggle-btn ${
            isMenuOpen ? 'header__toggle-btn_open' : ''
          }`}
        ></button>
      )}
    </>
  );
}
