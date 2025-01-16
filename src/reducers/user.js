import {
  USER_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN,
  LOGIN_ERROR,
  LOCAL_STORAGE_CHECK
} from 'src/actions/user';

export const initialState = {
  // user: {
  logged: false,
  // pseudo: "Anonyme",
  // },
  loggedMessage: 'Hello User',
  inputs: {
    email: '',
    password: '',
  },
  user_id: '',
  token: '',
  errormessage: false
  
  // settingsOpened: true,
  // loggedErrorMessage: "Veuillez ressaisir votre Email"
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case USER_INPUT_CHANGE:
      return {
        // on renvoi un nouveau state
        ...state,
        // je crée un nouvel objet (puisque là inputs est un objet dans "initialState")
        inputs: {
          // dans lequel je récupère toutes les valeurs qui existaient dans inputs 
          //(donc là : email et password)
          ...state.inputs,
          // je destructure ce qu'il y a dans action.payload 
          // ( que le contenu, donc là : [name] : value) et ça remplace par les nouvelles données
          ...action.payload
        },
      };
      case USER_LOGIN:
        return {
          ...state,
          // je m'assure que logged est bien "true"
          // user: {
          // logged: !state.logged,
          user_id: action.payload
          // pseudo: action.user.pseudo
          // }
        };

    case USER_LOGOUT:
      return {
        ...state,
        // je m'assure que logged est bien "false"
        logged: false,
        // modalsConnexion: false,
      };

    case USER_LOGIN_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        logged: true,
        loggedMessage: `${action.payload.username}`,
        inputs: {
          email: '',
          password: ''
        },
        user_id: action.payload.user_id,
        token: action.payload.token,
        ...action.payload
      }
      
    case LOGIN_ERROR:
      return {
        ...state,
        logged: false,
        settingsOpened: true,
        errormessage: true
      }


    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
