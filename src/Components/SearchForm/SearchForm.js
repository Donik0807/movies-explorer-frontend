import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

export default function SearchForm({
  onSubmit = () => {
    return;
  },
  searchValue,
  onSearch,
  filterValue, 
  onFilter,
  errorMessage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={onSearch}
            className='search__input'
            placeholder='Фильм'
          />
          <button className='search__button button-animation'></button>
          {errorMessage && <span className='search__error-message'>{errorMessage}</span>}
        </div>
        <FilterCheckBox
          isChecked={filterValue}
          onChecked={onFilter}
        ></FilterCheckBox>
      </form>
    </section>
  );
}
