import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_img ${(card.name || card.link) ? 'popup_active' : ''} popup_background-color_dark`}>
      <div className="popup__container popup__container_img">
        <figure className="popup__figure">
          <img src={card.link} alt={card.name}
            className="popup__image" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button className="button popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;
