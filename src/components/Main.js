import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState();
  const [userId, setUserId] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).
      then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setUserId(userId._id);
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <button className="button button_type_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={onEditAvatar}>
          <img src={userAvatar} alt={userName} className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="button profile__edit" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="button profile__add" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="section">
        <ul className="cards">
          {cards.map(card => (
              <Card key={card._id} {...card} onCardClick={onCardClick}/>
            )
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
