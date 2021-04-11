import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen? 'popup_active' : ''}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form className={`form form_type_${name}`} name={`${name}-info`} noValidate>
            {children}
          </form>
          <button className="button popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
        </div>
      </div>
  )
}

export default PopupWithForm;
