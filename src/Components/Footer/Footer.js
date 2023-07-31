import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

const allowedPaths = ['/', '/movies', '/saved-movies']

export default function Footer() {
  const { pathname } = useLocation();

  if (!allowedPaths.includes(pathname)) {
    return;
  }

  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <span className='footer__text-info'>&#169; 2023</span>
        <div>
          <span className='footer__text-info'>Яндекс.Практикум</span>
          <a
            href='https://github.com/Donik0807'
            target='_blank'
            rel='noreferrer'
            className='footer__text-info link-animation'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
