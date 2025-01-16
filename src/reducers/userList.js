import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
} from 'src/actions/fetchUsersFilters';
import { FILTER_SELECT_USERS } from 'src/actions/select';

export const initialState = {
  list: [],
  user_id:''
,  // loading: false,


}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case FETCH_USERS:
      return {
        ...state,
        // loading: true
      }

    case FETCH_USERS_SUCCESS:
        return {
        ...state,
        list: action.payload,
        user_id: action.payload.user_id
        // loading: false
        
      }
      
  
    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
