import React from 'react';
import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return <section className='not-found-page'>
    <h1 className='not-found-page__title'>404</h1>
    <p className='not-found-page__text'>Страница не найдена</p>
    <Link className='not-found-page__link link-animation' onClick={() => navigate(-1)}>Назад</Link>
  </section>
}
