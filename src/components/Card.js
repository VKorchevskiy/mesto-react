import React from 'react';

function Card({name, likes, link, onCardClick}) {
  return (
    <li className="card">
      <figure className="card__figure">
        <img src={link} alt={name} className="card__image" onClick={() => onCardClick({name, link})}/>
        <figcaption className="card__caption">
          <h2 className="card__title">{name}</h2>
          <div className="card__like-container">
            <button className="button card__like" type="button" aria-label="Нравится"></button>
            <p className="card__like-count">{likes.length}</p>
          </div>
        </figcaption>
      </figure>
      <button className="button card__trash" type="button" aria-label="Удалить"></button>
    </li>
  )
}

export default Card;
