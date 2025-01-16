import React from 'react';
import PropTypes from 'prop-types';

const ModalPhoto = () => (

<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close"/>
</div>
);

ModalPhoto.proptypes = {

};
export default ModalPhoto;
