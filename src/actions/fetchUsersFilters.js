export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS = "FETCH_USERS";

export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";


export const fetchUserInfoSuccess = (payload) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload
});

export const fetchUserInfo = (payload) => ({
  type: FETCH_USER_INFO,
  payload
});

// filter by ville, race, sexe
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

// 
export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});
