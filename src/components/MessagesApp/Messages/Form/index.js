import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({ inputValue, onFormSubmit, onInputChange }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    onFormSubmit();
  }} className=" message-submit__input">
    <input
      onChange={(e) => {
        const textSaisi = e.target.value;
        onInputChange(textSaisi);
      }

      }
      className="input inputcss mr-5"
      type="text"
      placeholder="Saisissez votre message"
      value={inputValue}
    />

    <button className="button message-submit__button" type="submit">
      <i className="fas fa-paper-plane"></i>
    </button>
  </form>
);

Form.proptypes = {

};
export default Form;
