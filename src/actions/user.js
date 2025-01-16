// action type
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOCAL_STORAGE_CHECK = "LOCAL_STORAGE_CHECK";

// PARTIE GESTION DES INSCRIPTIONS
export const USER_INPUT_CHANGEINSCRIPTION = "USER_INPUT_CHANGEINSCRIPTION";
export const USER_INSCRIPTION = "USER_INSCRIPTION";
export const USER_INSCRIPTION_SUCCESS = "USER_INSCRIPTION_SUCCESS";
export const USER_INSCRIPTION_ERROR = "USER_INSCRIPTION_ERROR";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const FETCH_FRIEND = "FETCH_FRIEND";
export const FETCH_FRIEND_SUCCESS = "FETCH_FRIEND_SUCCESS";
export const FETCH_PROFIL_FRIEND = "FETCH_PROFIL_FRIEND";

export const fetchProfilFriend = (payload) => ({
  type: FETCH_PROFIL_FRIEND,
  payload
});


export const fetchFriendSuccess = (payload) => ({
  type: FETCH_FRIEND_SUCCESS,
  payload
});

export const fetchFriend = () => ({
  type: FETCH_FRIEND,
  
});

export const addFriendSuccess = () => ({
  type: ADD_FRIEND_SUCCESS
})

export const addFriend = (payload) => ({
  type: ADD_FRIEND,
  payload
});

export const localStorageCheck = () => ({
  type: LOCAL_STORAGE_CHECK
});

// action creators
export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userInputChange = (payload) => ({
  type: USER_INPUT_CHANGE,
  payload
});

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload
});


// PARTIE EXPORT INSCRIPTION
export const userInputChangeInscription = (payload) => ({
  type: USER_INPUT_CHANGEINSCRIPTION,
  payload
});

export const userInscription = () => ({
  type: USER_INSCRIPTION,
});


export const userInscriptionSuccess = (payload) => ({
  type: USER_INSCRIPTION_SUCCESS,
  payload
});

export const userInscriptionError = () => ({
  type: USER_INSCRIPTION_ERROR,
})
