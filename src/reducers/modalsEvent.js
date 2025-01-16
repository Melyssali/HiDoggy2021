import {
  TOGGLE_EVENTS_MODAL,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_ERROR,
  CHANGE_INPUT_EVENT

} from 'src/actions/event';

export const initialState = {
  modalType: false,
  created: false,
  inputs: {
    name:'',
    date: "",
    time: "",
    adress: "",
    city: "",
    access_pmr: true,
  }
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CREATE_EVENT_ERROR:
      return {
        ...state,
      }

    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        inputs: {
          date: "",
          time: "",
          location: "",
          access_pmr: "",
        },
        created: true,
        ...action.payload
      }

    case CREATE_EVENT:
      return {
        ...state,
        modalType: false,
      }

    case TOGGLE_EVENTS_MODAL:
      return {
        // on renvoi un nouveau state
        ...state,
        modalType: !state.modalType,
      };
    
    case CHANGE_INPUT_EVENT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload
        },
      }

    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
