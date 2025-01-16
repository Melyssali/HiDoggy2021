import {
    TOGGLE_BUTTON_PROFIL
  } from 'src/actions/index';
  import { USER_LOGOUT } from 'src/actions/user';
  
  export const initialState = {
    isActive: false,
    
  
  }
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case TOGGLE_BUTTON_PROFIL:
        return {
          ...state,
          isActive: !state.isActive
        }

      case USER_LOGOUT:
        return {
          ...state,
          isActive: false,
          
        }

      default:
        // puis on renvoi le state
        return state;
    }
  };
  
  export default reducer;
  