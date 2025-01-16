// action type
export const FETCH_SEARCH = "FETCH_SEARCH";
export const USER_FETCH_SEARCH = "USER_FETCH_SEARCH";
export const CHANGE_USER_FILTER = "CHANGE_USER_FILTER";
export const HANDLE_SEARCH = "HANDLE_SEARCH";
export const FILTER_SELECT_USERS = "FILTER_SELECT_USERS";
export const CHANGE_CITY_EVENT = "CHANGE_CITY_EVENT";
// action creators

export const changeCityEvent = (payload) => ({
  type: CHANGE_CITY_EVENT,
  payload
});

export const fetchSearch = (payload) => ({
  type: FETCH_SEARCH,
  payload

});

//
export const userFetchSearch = (payload) => ({
  type: USER_FETCH_SEARCH,
  payload
});

// Pour stocker les "changements" de filtre effectué par l'USER
export const changeUserFilter = (payload) => ({
  type: CHANGE_USER_FILTER,
  payload
});

export const filterSelectUsers = () => ({
  type: FILTER_SELECT_USERS,
  
})

