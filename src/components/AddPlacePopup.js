import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeLink = (e) => setLink(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link })
      .then(() => {
        setName('');
        setLink('');
      })
      .catch(err => console.log(err));
  }

  return (
    <PopupWithForm name={'card'} title={'Новое место'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input className="form__input-text form__input-text_type_card-name" type="text" name="card-name" id="card-name"
        placeholder="Название" required minLength={2} maxLength={30} value={name} onChange={handleChangeName} />
      <span className={`form__input-error card-name-error`}></span>
      <input className="form__input-text form__input-text_type_card-link" type="url" name="card-link" id="card-link"
        placeholder="Ссылка на картинку" required value={link} onChange={handleChangeLink} />
      <span className="form__input-error card-link-error"></span>
      <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
    </ PopupWithForm>
  );
}

export default AddPlacePopup;
