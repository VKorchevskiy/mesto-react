const formSelectors = {
  inputSelector: '.form__input-text',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input-text_type_error',
  errorClass: 'form__input-error_active'
}
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

export {
  formSelectors,
  optionsApi,
}
