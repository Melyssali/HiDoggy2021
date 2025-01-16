export const TOGGLE_EVENTS_MODAL = 'TOGGLE_EVENTS_MODAL';
export const TOGGLE_DELETE_EVENTS_MODAL = "TOGGLE_DELETE_EVENTS_MODAL";
export const CREATE_EVENT = "CREATE_EVENT";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_ERROR = "CREATE_EVENT_ERROR";
export const CHANGE_INPUT_EVENT = "CHANGE_INPUT_EVENT";
export const DELETE_EVENTS_MODAL = "DELETE_EVENTS_MODAL";
export const DELETE_EVENTS_MODAL_SUCCESS = "DELETE_EVENTS_MODAL_SUCCESS";
export const CONFIRMATION_DELETE_EVENTS = "CONFIRMATION_DELETE_EVENTS";
export const CONFIRMATION_DELETE_EVENTS_SUCCESS = "CONFIRMATION_DELETE_EVENTS_SUCCESS";

export const changeInputEvent = (payload) => ({
  type: CHANGE_INPUT_EVENT,
  payload
});

export const toggleEventsModal = () => ({
  type: TOGGLE_EVENTS_MODAL,
 
});

export const createEvent = () => ({
  type: CREATE_EVENT,
});
  
export const createEventSuccess = (payload) => ({
  type: CREATE_EVENT_SUCCESS,
  payload
});

export const createEventError = () => ({
  type: CREATE_EVENT_ERROR,
});

// ouvrir fermer la modal "delete event"
export const toggleDeleteEventsModal = () => ({
  type: TOGGLE_DELETE_EVENTS_MODAL,
});

export const deleteEventsModal = (payload) => ({
  type: DELETE_EVENTS_MODAL,
  payload
});

export const deleteEventsModalSuccess = () => ({
  type: DELETE_EVENTS_MODAL_SUCCESS,
});

export const confirmationDeleteEvents = () => ({
   type: CONFIRMATION_DELETE_EVENTS,
 });

export const confirmationDeleteEventsSuccess = (payload) => ({
  type: CONFIRMATION_DELETE_EVENTS_SUCCESS,
  payload
});
