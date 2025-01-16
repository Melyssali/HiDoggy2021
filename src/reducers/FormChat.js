import { MESSAGE_INPUT_CHANGE, MESSAGE_RECEIVED, MESSAGE_SUBMIT} from "src/actions/chat";
import { USER_LOGIN_SUCCESS } from 'src/actions/user';
import { v4 as uuid } from 'uuid';

export const stateInitial = {
  inputText: "",
  messages: [],
  logged: false,
  pseudo: 'anonyme'

};

const reducer = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case MESSAGE_RECEIVED: 
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
 
    case MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        inputText: action.payload,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        pseudo: `${action.payload.username}`,
        ...action.payload,
        
      };
      case MESSAGE_SUBMIT:
        return {
          ...state,
          inputText: '',
        };
      
    default:
      return state;
  }
};

export default reducer;
