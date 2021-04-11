import {optionsApi} from './constant';

class Api {
  constructor(config) {
    this._urlUserMe = config.urlUserMe;
    this._urlCards = config.urlCards;
    this._urlCardsLikes = config.urlCardsLikes;
    this._urlUserMeAvatar = config.urlUserMeAvatar;
    this._headers = config.headers;
  }

  /**
   * Проверяет ответ сервера и возвращает результат
   * @param {*} res - ответ сервера
   * @returns объект данных или ошибку
   */
  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  /**
   * Берёт данные пользователя с сервера
   * @returns {*} Данные пользователя или ошибку
   */
  getUserInfo() {
    return fetch(this._urlUserMe, {
      headers: this._headers,
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Берёт массива карточек с сервера, для первичной инициализации страницы
   * @returns {Array} массив карточек или ошибку
   */
  getInitialCards() {
    return fetch(this._urlCards, {
      headers: this._headers,
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Обновляет информацию пользователя
   * @param {name, about} param0 name - имя пользователя, about - описание пользователя.
   */
  setUserInfo({ name, about }) {
    return fetch(this._urlUserMe, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Добавляет карточку
   * @param {name, link} name - название карточки, link - ссылка на картинку.
   * @returns карточку или ошибку
   */
  setCard({ name, link }) {
    return fetch(this._urlCards, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Удаляет карточку
   * @param {*} id - id карточки
   * @returns карточку или ошибку
   */
  deleteCard(id) {
    return fetch((`${this._urlCards}/${id}`), {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Установка лайка
   * @param {*} id - id карточки
   * @returns лайки или ошибку
   */
  putLike(id) {
    return fetch((`${this._urlCardsLikes}/${id}`), {
      method: 'PUT',
      headers: this._headers,
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Удаление лайка
   * @param {*} id - id номер карточки
   * @returns карточку или ошибку
   */
  deleteLike(id) {
    return fetch((`${this._urlCardsLikes}/${id}`), {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._checkServerResponse(res));
  }

  /**
   * Установка нового аватара
   * @param {avatar} avatar- аватар
   * @returns аватар или ошибку
   */
  setAvatar({ avatar }) {
    return fetch(this._urlUserMeAvatar, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then(res => this._checkServerResponse(res));
  }
}

export const api = new Api(optionsApi);
