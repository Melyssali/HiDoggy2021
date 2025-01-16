import {
  DELETE_EVENTS_MODAL_SUCCESS,
  DELETE_EVENTS_MODAL,
  CONFIRMATION_DELETE_EVENTS,
  CONFIRMATION_DELETE_EVENTS_SUCCESS,

} from 'src/actions/event';

import {
  SHOW_EVENT_SUCCESS,
} from 'src/actions/fetchEvents';

export const initialState = {
  isDeleteEventModalOpen: false,
  myEventsList: [],
  idEvent: '',
  isDeletedEvent: false,
  
  
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case DELETE_EVENTS_MODAL:
      return {
        ...state,
        isDeleteEventModalOpen: !state.isDeleteEventModalOpen,
        idEvent: action.payload
      };

    // case DELETE_EVENTS_MODAL_SUCCESS:
    //   return {
    //     // on renvoi un nouveau state
    //     ...state,
    //   };
 
    // case CONFIRMATION_DELETE_EVENTS:
    //   return {
    //     ...state,
    //     isDeleteEventModalOpen: !state.isDeleteEventModalOpen,
    //   };

    case CONFIRMATION_DELETE_EVENTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isDeleteEventModalOpen: !state.isDeleteEventModalOpen,
        isDeletedEvent: !state.isDeletedEvent,
      };

    // case SHOW_EVENT_SUCCESS: 
    //   return {
    //     ...state,
    //     ...action.payload,
    //     idEvent: action.payload.id,
    //   }

    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
