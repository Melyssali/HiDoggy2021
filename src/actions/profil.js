export const EDIT_PROFIL_USER = "EDIT_PROFIL_USER";
export const EDIT_PROFIL_USER_SUCCESS = "EDIT_PROFIL_USER_SUCCESS";
export const EDIT_PROFIL_DOG_SUCCESS = "EDIT_PROFIL_DOG_SUCCESS";
export const CHANGE_INFO_DOG_PROFIL = "CHANGE_INFO_DOG_PROFIL";
export const EDIT_PROFIL_DOG = "EDIT_PROFIL_DOG";
export const UPDATE_PROFIL_USER = "UPDATE_PROFIL_USER";
export const SHOW_PRESENTATION = "SHOW_PRESENTATION";
export const SHOW_DOG_PRESENTATION = "SHOW_DOG_PRESENTATION";
export const SHOW_EVENT = "SHOW_EVENT";
export const CHANGE_DOG_PROFIL = "CHANGE_DOG_PROFIL";
export const DOG_ADDED = "DOG_ADDED";
export const DOG_INFO = "DOG_INFO";
export const DOG_INFO_SUCCESS = "DOG_INFO_SUCCESS";
export const MODAL_DOG = "MODAL_DOG";
export const UPDATE_PROFIL_DOG = "UPDATE_PROFIL_DOG";
export const FETCH_DOG_INFO = "FETCH_DOG_INFO";
export const FETCH_DOG_INFO_SUCCESS = "FETCH_DOG_INFO_SUCCESS";
export const EDIT_MODAL_DOG = "EDIT_MODAL_DOG"
export const DELETE_DOGGIE = "DELETE_DOGGIE";
export const DELETE_DOGGIE_SUCCESS = "DELETE_DOGGIE_SUCCESS";
export const CHANGING_MESSAGE_EDIT = "CHANGING_MESSAGE_EDIT";
export const FETCH_DOG_INFO_USER = "FETCH_DOG_INFO_USER";
export const FETCH_DOG_INFO_USER_SUCCESS = "FETCH_DOG_INFO_USER_SUCCESS";
export const DELETE_DOG = "DELETE_DOG";
export const DELETE_DOG_SUCCESS = "DELETE_DOG_SUCCESS"

export const deleteDog = (payload) => ({
  type: DELETE_DOG,
  payload
})

export const deleteDogSuccess = (payload) => ({
  type: DELETE_DOG_SUCCESS,
  payload
})

export const fetchDogInfoUserSuccess = (payload) => ({
  type: FETCH_DOG_INFO_USER_SUCCESS,
  payload
})

export const fetchDogInfoUser = (payload) => ({
  type: FETCH_DOG_INFO_USER,
  payload
})

export const changingMessageEdit = () => ({
  type: CHANGING_MESSAGE_EDIT
})

export const deleteDoggieSuccess = (payload) => ({
  type: DELETE_DOGGIE_SUCCESS,
  payload
})

export const deleteDoggie = (payload) => ({
  type: DELETE_DOGGIE,
  payload
})

export const editModalDog = (payload) => ({
  type: EDIT_MODAL_DOG,
  payload
});

export const changeInfoDogProfil = (payload) => ({
  type: CHANGE_INFO_DOG_PROFIL,
  payload
});

export const editProfilDogSuccess = (payload) => ({
  type: EDIT_PROFIL_DOG_SUCCESS,
  payload
});

export const modalDog = () => ({
  type: MODAL_DOG
});

export const dogInfoSuccess = (payload) => ({
  type: DOG_INFO_SUCCESS,
  payload
});

export const dogInfo = (payload) => ({
  type: DOG_INFO,
  payload
});

export const dogAdded = (payload) => ({
  type: DOG_ADDED,
  payload
});

export const fetchDogInfo = (payload) => ({
  type: FETCH_DOG_INFO,
  payload
});

export const fetchDogInfoSuccess = (payload) => ({
  type: FETCH_DOG_INFO_SUCCESS,
  payload
});

export const updateProfilDog = () => ({
  type: UPDATE_PROFIL_DOG,
  
});

export const changeDogProfil = (payload) => ({
  type: CHANGE_DOG_PROFIL,
  payload
});

export const showEvent = () => ({
  type: SHOW_EVENT
});

export const showDogPresentation = () => ({
  type: SHOW_DOG_PRESENTATION
});

export const showPresentation = () => ({
  type: SHOW_PRESENTATION
});


export const updateProfilUser = () => ({
  type: UPDATE_PROFIL_USER
});

export const editProfilDog = (payload) => ({
  type: EDIT_PROFIL_DOG,
  payload
});

export const editProfilUserSucess = (payload) => ({
  type: EDIT_PROFIL_USER_SUCCESS,
  payload
});

export const editProfilUser = (payload) => ({
  type: EDIT_PROFIL_USER,
  payload
});


