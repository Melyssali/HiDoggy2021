import {
    FETCH_DOG_INFO_SUCCESS,
  
  } from 'src/actions/profil';
  
  export const initialState = {
    dogsProfil: [],
  }
  
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      default:
        // puis on renvoi le state
        return state;
    }
  };
  
  export default reducer;
