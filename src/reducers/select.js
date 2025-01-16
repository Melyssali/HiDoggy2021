import {
  FETCH_SEARCH,
  USER_FETCH_SEARCH,
  CHANGE_USER_FILTER,
  CHANGE_CITY_EVENT

} from 'src/actions/select';

export const initialState = {
  isSearching: false,
  inputs: {
    city: "",
    race: "",
    dog_gender: "",
  },
  city: "",
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_CITY_EVENT: 
      return {
        ...state,
        city: action.payload
      }

    case FETCH_SEARCH:
      return {
        // on renvoi un nouveau state
        ...state,
        // je crée un nouvel objet (puisque là inputs est un objet dans "initialState")
        inputs: {
          ...state.inputs,
          ...action.payload
        },
      };

    case USER_FETCH_SEARCH:
      return {
        ...state,
        ...action.payload
      }

    case CHANGE_USER_FILTER:
      return {
        // on renvoi un nouveau state
        ...state,
        // je crée un nouvel objet (puisque là inputs est un objet dans "initialState")
        inputs: {
          ...state.inputs,
          ...action.payload
        },
      };


    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
