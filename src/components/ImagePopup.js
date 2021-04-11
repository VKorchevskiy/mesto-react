import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_img popup_background-color_dark">
        <div className="popup__container popup__container_img">
          <figure className="popup__figure">
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" alt="."
              className="popup__image" />
            <figcaption className="popup__caption">111</figcaption>
          </figure>
          <button className="button popup__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
  )
}

export default ImagePopup;
