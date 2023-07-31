import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section id="about-project" className='about'>
      <h2 className='title about__title'>О проекте</h2>
      <div className='about__project-info'>
        <div className='about__info-container'>
          <h3 className='about__text'>Дипломный проект включал 5 этапов</h3>
          <p className='about__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__info-container'>
          <h3 className='about__text'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='progress-container-1'>
        <div className='progress-line about__proggress-1'>1 неделя</div>
        <span className='about__progress-text'>Back-end</span>
      </div>
      <div className='progress-container-2'>
        <div className='progress-line about__proggress-2'>4 недели</div>
        <span className='about__progress-text'>Front-end</span>
      </div>
    </section>
  );
}
