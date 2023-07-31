import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

export default function SearchForm({
  onSubmit = () => {
    return;
  },
}) {
  const [searchValue, setSearchValue] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventEventDefault();
    onSubmit();
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <input
            name='search'
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='search__input'
            placeholder='Фильм'
          />
          <button className='search__button button-animation'></button>
        </div>
        <FilterCheckBox
          isChecked={isShortFilm}
          onChecked={() => setIsShortFilm((prev) => !prev)}
        ></FilterCheckBox>
      </form>
    </section>
  );
}
