import { SEARCHED_MESSAGE } from "../actions/chat";

export const stateInitial = {
  inputSearch: '',
}



const reducer = ( state= stateInitial, action = {}) => {
    switch(action.type) {

      case SEARCHED_MESSAGE:
        return {
          ...state,
          inputSearch: action.payload
        }
      default:
        return state;
    }
} ;

export default reducer;
