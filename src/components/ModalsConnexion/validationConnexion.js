import React from 'react';
import PropTypes from 'prop-types';

const validationInscription = (email, password) => {
let errors = {};

if (!email) {
  errors.email = "L'email est requis"
} else if (!/\S+@\S+\.\S+/.test(email)) {
  errors.email = "L'email est invalide"
}

if (!password) {
  errors.pseudo = "Le Mot de passe est requis."
} else if (password.length < 8) {
  errors.password = "Le Mot de passe doit comporté au minimum 8 caractères"
}

return errors

};

validationInscription.proptypes = {

};
export default validationInscription;
