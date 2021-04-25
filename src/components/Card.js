import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({name, likes, owner, link, onCardClick}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = (owner._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `button card__trash ${isOwn ? '' : 'card__trash_disabled'}`
  );
  const isLiked = likes.some(like => like._id === currentUser._id);
  const cardLikeButtonClassName = (
    `button card__like ${isLiked ? 'card__like_active' : ''}`
  );
  console.log(isLiked)

  return (
    <li className="card">
      <figure className="card__figure">
        <img src={link} alt={name} className="card__image" onClick={() => onCardClick({name, link})}/>
        <figcaption className="card__caption">
          <h2 className="card__title">{name}</h2>
          <div className="card__like-container">
            <button className={cardLikeButtonClassName} type="button" aria-label="Нравится"></button>
            <p className="card__like-count">{likes.length}</p>
          </div>
        </figcaption>
      </figure>
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить"></button>
    </li>
  )
}

export default Card;
