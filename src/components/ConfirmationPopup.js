import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmationPopup() {


  return (
    <PopupWithForm name={'delete-card'} title={'Вы уверены?'}>
      <input className="button form__save form__save_type_delete-card" type="submit" value="Да" />
    </ PopupWithForm>
  );
}

export default ConfirmationPopup;
