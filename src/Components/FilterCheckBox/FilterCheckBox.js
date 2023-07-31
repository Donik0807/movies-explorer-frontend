import React from 'react';
import './FilterCheckBox.css';

export default function FilterCheckBox({ isChecked, onChecked }) {
  return (
    <label className='search__label'>
      <input
        className='search__checkbox'
        name='shorfilms'
        value='true'
        type='checkbox'
        checked={isChecked}
        onChange={onChecked}
      />
      <span
        className={`search__custom-checkbox ${
          isChecked ? 'search__custom-checkbox_active' : ''
        }`}
      ></span>
      <span className='search__label-text'>Короткометражки</span>
    </label>
  );
}
