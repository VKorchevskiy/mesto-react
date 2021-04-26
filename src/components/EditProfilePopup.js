import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);

  useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser.name, currentUser.about]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input className="form__input-text form__input-text_type_name" type="text" name="name-profile" id="name-profile"
        placeholder="Имя профиля" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
      <span className="form__input-error name-profile-error"></span>
      <input className="form__input-text form__input-text_type_job" type="text" name="job-profile" id="job-profile"
        placeholder="Род деятельности" required minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} />
      <span className="form__input-error job-profile-error"></span>
      <input className="button form__save form__save_type_profile" type="submit" value="Сохранить" />
    </ PopupWithForm>
  );
}

export default EditProfilePopup;
