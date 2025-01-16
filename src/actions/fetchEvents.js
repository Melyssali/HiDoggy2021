// L'user crée un évent
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";

// L'user participe à tel ou tel event
export const FETCH_PARTICIPATE_EVENT = "FETCH_PARTICIPATE_EVENT";
export const FETCH_PARTICIPATE_EVENT_SUCCESS = "FETCH_PARTICIPATE_EVENT_SUCCESS";

// J'importe de la BDD les participations aux évènements de l'user
export const SHOW_EVENT_LIST = "SHOW_EVENT_LIST";
export const SHOW_EVENT_LIST_SUCCESS = "SHOW_EVENT_LIST_SUCCESS";

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const fetchEventsSuccess = (payload) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload
});

export const fetchParticipateEvent = (payload) => ({
  type: FETCH_PARTICIPATE_EVENT,
  payload
});

export const fetchParticipateEventSuccess = (payload) => ({
  type: FETCH_PARTICIPATE_EVENT_SUCCESS,
  payload
});

export const showEventList = (payload) => ({
  type: SHOW_EVENT_LIST,
  payload
});

export const showEventListSuccess = (payload) => ({
  type: SHOW_EVENT_LIST_SUCCESS,
  payload
})
