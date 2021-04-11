import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: null, link: null});

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="form__input-text form__input-text_type_name" type="text" name="name-profile" id="name-profile"
          placeholder="Имя профиля" defaultValue="" required minLength="2" maxLength="40" />
        <span className="form__input-error name-profile-error"></span>
        <input className="form__input-text form__input-text_type_job" type="text" name="job-profile" id="job-profile"
          placeholder="Род деятельности" defaultValue="" required minLength="2" maxLength="200" />
        <span className="form__input-error job-profile-error"></span>
        <input className="button form__save form__save_type_profile" type="submit" value="Сохранить" />
      </ PopupWithForm>

      <PopupWithForm name={'card'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="form__input-text form__input-text_type_card-name" type="text" name="card-name" id="card-name"
          placeholder="Название" defaultValue="" required minLength={2} maxLength={30} />
        <span className={`form__input-error card-name-error`}></span>
        <input className="form__input-text form__input-text_type_card-link" type="url" name="card-link" id="card-link"
          placeholder="Ссылка на картинку" defaultValue="" required />
        <span className="form__input-error card-link-error"></span>
        <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
      </ PopupWithForm>

      <PopupWithForm name={'delete-card'} title={'Вы уверены?'}>
        <input className="button form__save form__save_type_delete-card" type="submit" value="Да" />
      </ PopupWithForm>

      <PopupWithForm name={'user-avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="form__input-text form__input-text_type_user-avatar" type="url" name="user-avatar" id="user-avatar"
          placeholder="Ссылка на картинку" defaultValue="" required />
        <span className="form__input-error user-avatar-error"></span>
        <input className="button form__save form__save_type_card" type="submit" value="Сохранить" />
      </ PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

    </>
  );

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick({name, link}) {
    setSelectedCard({name , link});
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: null, link: null});
  }

}

export default App;
