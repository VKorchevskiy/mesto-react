import React, { useEffect, useContext, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef();

  useEffect(() => {
    if (currentUser.avatar) {
      avatarRef.current.value = '';
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm name={'user-avatar'} title={'Обновить аватар'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input ref={avatarRef} className="form__input-text form__input-text_type_user-avatar" type="url" name="user-avatar" id="user-avatar"
        placeholder="Ссылка на картинку" required />
      <span className="form__input-error user-avatar-error"></span>
      <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
    </ PopupWithForm>
  );
}

export default EditAvatarPopup;
