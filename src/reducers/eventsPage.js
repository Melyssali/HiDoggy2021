import {
  // FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_PARTICIPATE_EVENT_SUCCESS,
  FETCH_PARTICIPATE_EVENT,
  SHOW_EVENT_LIST,
  SHOW_EVENT_LIST_SUCCESS,

} from 'src/actions/fetchEvents';

export const initialState = {
  eventsList: [],
  id: '',
  myEventsList: [],
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    // Mes données events sont stocké dans la eventsList
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        eventsList: action.payload,
        id: action.payload.id
      };
    
    
    case FETCH_PARTICIPATE_EVENT_SUCCESS:
      return {
        ...state,
        myEventsList: [...state.myEventsList, action.payload]
      };
    
  
    case SHOW_EVENT_LIST_SUCCESS:
      return {
        ...state,
        myEventsList: action.payload,
      }
    
    

    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
