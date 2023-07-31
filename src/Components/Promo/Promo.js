import React from 'react';
import './Promo.css';
import Navtab from '../Navtab/Navtab';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__wrapper'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <Navtab></Navtab>
      </div>
    </section>
  );
}
