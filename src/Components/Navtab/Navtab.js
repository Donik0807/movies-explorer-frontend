import React from 'react';
import './Navtab.css';

export default function Navtab() {
  return (
    <nav className='navtab'>
      <a href='#about-project' className='navtab__link link-animation'>
        О проекте
      </a>
      <a href='#techs' className='navtab__link link-animation'>
        Технологии
      </a>
      <a href='#about-me' className='navtab__link link-animation'>
        Студент
      </a>
    </nav>
  );
}
