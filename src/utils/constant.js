/* const editButton = document.querySelector('.profile__edit');
const editButtonAvatar = document.querySelector('.button_type_edit-avatar');
const addButton = document.querySelector('.profile__add');
const cardContainerSelector = '.cards';
const popupTypeProfile = document.querySelector('.popup_type_profile');
const formProfile = popupTypeProfile.querySelector('.form_type_profile');
const profileNameInput = popupTypeProfile.querySelector('.form__input-text_type_name');
const profileDescriptionInput = popupTypeProfile.querySelector('.form__input-text_type_job');
const popupTypeCard = document.querySelector('.popup_type_card');
const formCard = popupTypeCard.querySelector('.form_type_card');
const selectorUserAvatar = '.profile__avatar';
const selectorPopupTypeAvatar = '.popup_type_user-avatar';
const popupTypeAvatar = document.querySelector(selectorPopupTypeAvatar);
const formAvatar = popupTypeAvatar.querySelector('.form');
const selectorPopupTypeDelete = '.popup_type_delete-card';
const popupTypeDelete = document.querySelector(selectorPopupTypeDelete);
const formDelete = popupTypeDelete.querySelector('.form');

const formSelectors = {
  inputSelector: '.form__input-text',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input-text_type_error',
  errorClass: 'form__input-error_active'
} */
const cohortId = 'cohort-21';
const baseUrl = 'https://mesto.nomoreparties.co/v1/';

const optionsApi = {
  urlUserMe: `${baseUrl}${cohortId}/users/me`,
  urlCards: `${baseUrl}${cohortId}/cards`,
  urlCardsLikes: `${baseUrl}${cohortId}/cards/likes`,
  urlUserMeAvatar: `${baseUrl}${cohortId}/users/me/avatar`,
  headers: {
    'Content-Type': 'application/json',
    'authorization': '1ebb7dd1-33fc-42c3-9fb6-1f66a002c6c0',
  },
}



/* const selectorCloseButton = '.popup__close';
const selectorPopupTypeImage = '.popup_type_img';
const cardTemplate = '#card';

const selectorPopupTypeProfile = '.popup_type_profile';



const selectorPopupTypeCard = '.popup_type_card';

const selectorProfileName = '.profile__name';
const selectorProfileDescription = '.profile__description'; */

export {
/*   editButton,
  editButtonAvatar,
  addButton,
  cardContainerSelector,
  popupTypeProfile,
  formProfile,
  profileNameInput,
  profileDescriptionInput,
  popupTypeCard,
  formCard,
  selectorUserAvatar,
  selectorPopupTypeAvatar,
  popupTypeAvatar,
  formAvatar,
  selectorPopupTypeDelete,
  popupTypeDelete,
  formDelete,
  formSelectors, */
  optionsApi,
/*   selectorCloseButton,
  selectorPopupTypeImage,
  cardTemplate,
  selectorPopupTypeProfile,
  selectorPopupTypeCard,
  selectorProfileName,
  selectorProfileDescription, */
}
