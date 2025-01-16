// J'importe tous les types d'action
// auxquels mon reducer doit réagir.

import {
  TOGGLE_MODALINSCRIPTION,
  TOGGLE_MODALCONNEXION
} from 'src/actions/index';
import { USER_INSCRIPTION, USER_LOGIN_SUCCESS, USER_INSCRIPTION_ERROR } from 'src/actions/user';
// Un reducer est une fonction qui me return le state
// c'est sa seule et unique responsabilité, il ne fait que ça
// mais il doit le faire bien.
// IL N'Y A AUCUNE EXCPETION AU FAIT QUE LE REDUCER DOIT RETURN LE STATE
// quel que soit le cas de figure, avec ou sans arguements reçus
// Les paramètres par défaut son INDISPENSABLES, vous pouvez complètement
// les copier / coller de reducer en reducer, y compris le SWITCH à l'interieur
// (suffit de supprimer les CASE)

export const stateInitial = {
  modalType: false,
  modalTypeConnexion: false

};

const reducer = (state = stateInitial, action = {}) => {
  // Je veux réagir à différents types d'action
  // pour savoir quoi changer dans le state
  switch (action.type) {
    
    case USER_INSCRIPTION_ERROR:
      return {
        ...state,
      }

    case TOGGLE_MODALINSCRIPTION:
      return {
        ...state,
        modalType: !state.modalType,
      };

    case TOGGLE_MODALCONNEXION:
      return {
        ...state,
        modalTypeConnexion: !state.modalTypeConnexion
      };
  
      case USER_INSCRIPTION:
      return {
        ...state,
        modalType: false,
      };

      case USER_LOGIN_SUCCESS: 
        return {
          ...state,
          modalTypeConnexion: false,
        }
    default:
      return state;
  }
};

export default reducer;
