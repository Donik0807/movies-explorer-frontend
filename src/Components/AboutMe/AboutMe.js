import React from 'react';
import './AboutMe.css';
import me from '../../images/me.png';

export default function AboutMe() {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='title about-me__title'>Студент</h2>
      <div className='about-me__info-container'>
        <div className='about-me__text-info'>
          <div>
            <h3 className='about-me__subtitle'>Виталий</h3>
            <p className='about-me__text'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a
            href='https://github.com/Donik0807'
            target='_blank'
            rel='noreferrer'
            className='about-me__github-link link-animation'
          >
            Github
          </a>
        </div>
        <img src={me} className='about-me__me' alt='Красивый молодой человек' />
      </div>
      <div className='about-me__portfolio'>
        <p className='about-me__portfolio-text'>Портфолио</p>
        <ul className='about-me__list'>
          <li className='about-me__portfolio-item'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/Donik0807/how-to-learn'
              className='about-me__portfolio-link link-animation'
            >
              Статичный сайт
            </a>
          </li>
          <li className='about-me__portfolio-item'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://donik0807.github.io/russian-travel/'
              className='about-me__portfolio-link link-animation'
            >
              Адаптивный сайт
            </a>
          </li>
          <li className='about-me__portfolio-item'>
            <a
              rel='noreferrer'
              href='https://github.com/Donik0807/react-mesto-api-full-gha'
              target='_blank'
              className='about-me__portfolio-link link-animation'
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
