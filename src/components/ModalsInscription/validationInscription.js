import React from 'react';
import PropTypes from 'prop-types';

const validationInscription = (email, password, pseudo, birthdate) => {
  let errors = {};


  if (!pseudo) {
    errors.pseudo = "Le pseudo est requis. Merci d'en saisir un nouveau"
  }

  if (!birthdate) {
    errors.birthdate="Votre date de naissance est requis"
  } 

  if (!password) {
    errors.pseudo = "Le Mot de passe est requis."
  } else if (password.length < 8) {
    errors.password = "Le Mot de passe doit comporté au minimum 8 caractères"
  }

  if (!email) {
    errors.email = "L'email est requis"
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'email est invalide"
  }

  return errors
};

validationInscription.proptypes = {

};
export default validationInscription;
