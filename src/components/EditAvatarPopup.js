import React, { useState, useEffect, useContext, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState('');
  // console.log(currentUser)
  const handleChangeLink = (e) => setAvatar(e.target.value);

  useEffect(() => {
    if (currentUser.avatar) {
      setAvatar('');
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar,
    });
  }

  return (
    <PopupWithForm name={'user-avatar'} title={'Обновить аватар'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input className="form__input-text form__input-text_type_user-avatar" type="url" name="user-avatar" id="user-avatar"
        placeholder="Ссылка на картинку" required value={avatar} onChange={handleChangeLink} />
      <span className="form__input-error user-avatar-error"></span>
      <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
    </ PopupWithForm>
  );
}

export default EditAvatarPopup;
