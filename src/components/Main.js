import React from 'react';
import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards }) {

  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="content page__content">
      <section className="profile">
        <button className="button button_type_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={onEditAvatar}>
          <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="button profile__edit" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="button profile__add" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="section">
        <ul className="cards">
          {cards.map(card => (
            <Card key={card._id} {...card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          )
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
