import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose }) {


  return (
    <PopupWithForm name={'card'} title={'Новое место'} isOpen={isOpen} onClose={onClose}>
      <input className="form__input-text form__input-text_type_card-name" type="text" name="card-name" id="card-name"
        placeholder="Название" defaultValue="" required minLength={2} maxLength={30} />
      <span className={`form__input-error card-name-error`}></span>
      <input className="form__input-text form__input-text_type_card-link" type="url" name="card-link" id="card-link"
        placeholder="Ссылка на картинку" defaultValue="" required />
      <span className="form__input-error card-link-error"></span>
      <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
    </ PopupWithForm>
  );
}

export default AddPlacePopup;
