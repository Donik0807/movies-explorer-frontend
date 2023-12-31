import React from 'react';
import './Popup.css';

export default function Popup({ isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={'popup__container'}>
        {children}
        <button
          className='popup__close-button button-animation'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
      </div>
    </div>
  );
}
