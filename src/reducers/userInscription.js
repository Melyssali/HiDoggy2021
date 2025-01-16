import {
  USER_INPUT_CHANGEINSCRIPTION,
  USER_INSCRIPTION_SUCCESS,
  USER_INSCRIPTION,
  USER_INSCRIPTION_ERROR,


} from 'src/actions/user';

export const initialState = {
  registered: false,
  inputs: {
    useremail: "",
    username: "",
    userbirthdate: "",
    userpassword: "",
  },
  errors: "",
  inscriptionOk: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case USER_INSCRIPTION:
      return {
        ...state,
        
        registered: true
      }

    case USER_INPUT_CHANGEINSCRIPTION:
      return {
        // on renvoi un nouveau state
        ...state,
        // je crée un nouvel objet (puisque là inputs est un objet dans "initialState")
        inputs: {
          ...state.inputs,
          ...action.payload
        },
        
      };

    case USER_INSCRIPTION_SUCCESS:
      return {
        ...state,
        inputs: {
          useremail: "",
          username: "",
          userbirthdate: "",
          userpassword: "",
        },
        inscriptionOk: true,
        ...action.payload
      };

      case USER_INSCRIPTION_ERROR:
        return {
          ...state,
        }

    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
