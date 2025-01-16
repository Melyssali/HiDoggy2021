import { EDIT_PROFIL_USER, UPDATE_PROFIL_USER, SHOW_EVENT,EDIT_PROFIL_USER_SUCCESS, SHOW_DOG_PRESENTATION, SHOW_PRESENTATION, CHANGE_DOG_PROFIL, FETCH_DOG_INFO_SUCCESS, FETCH_DOG_INFO, DELETE_DOG_SUCCESS } from 'src/actions/profil';
import { FETCH_USER_INFO_SUCCESS } from 'src/actions/fetchUsersFilters';

import { DOG_ADDED, UPDATE_PROFIL_DOG, DOG_INFO_SUCCESS, MODAL_DOG, CHANGE_INFO_DOG_PROFIL, EDIT_MODAL_DOG, DELETE_DOGGIE_SUCCESS, EDIT_PROFIL_DOG_SUCCESS, CHANGING_MESSAGE_EDIT } from '../actions/profil';
import { FETCH_FRIEND_SUCCESS, ADD_FRIEND_SUCCESS } from 'src/actions/user';


export const initialState = {
  isEdited: false,
  isModalDogOpen: false,
  isEditDogModalOpen: false,
  user_id: '',
  inputs: {
    username: '',
    userbirthdate: '',
    usercity: '',
    userlanguages: '',
    userpresentation: '',
    usergender: '',
    userregistration_date: '',
    userprofile_pic: '',
  },
  doglist: [],
  inputs_dog: {
    race: '',
    dog_gender: '',
    birthday: '',
    description: '',
    name: '',
  },

  input_dog_user: {
    race: '',
    dog_gender: '',
    birthday: '',
    description: '',
    name: '',
  },

  isDeletedDoggie: false,
  friendlist: [],
  dog_id: "",
  doggie_id:"",
  profile_pic: '',
  isPresentationActive: true,
  isDogPresentationActive: false,
  isEventActive: false,
  isEditDog: false,
  friendAdded: false,
  isDogDeleted: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case DELETE_DOG_SUCCESS : 
      return {
        ...state,
        isDogDeleted: !state.isDogDeleted
      }

    case ADD_FRIEND_SUCCESS :
      return {
        ...state,
        friendAdded: !state.friendAdded
      }

    case EDIT_PROFIL_DOG_SUCCESS :
      return {
        ...state,
        isEditDog: !state.isEditDog
      }
    case DELETE_DOGGIE_SUCCESS : 
      return {
        ...state,
        isDeletedDoggie: !state.isDeletedDoggie
      }
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        friendlist: action.payload
      }

    case EDIT_MODAL_DOG:
      return {
        ...state,
        dog_id: action.payload,
        isEditDogModalOpen: !state.isEditDogModalOpen
      }

    case MODAL_DOG: 
      return {
        ...state,
        isModalDogOpen: !state.isModalDogOpen,
      }


    case EDIT_PROFIL_USER:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload
        }
      }

      case FETCH_USER_INFO_SUCCESS:
        return {
            ...state,
            inputs: {
                ...state.inputs,
                ...action.payload
            },
        } 

      case CHANGING_MESSAGE_EDIT: 
          return {
            ...state,
            isEdited: false
          }
        
  
      
    case UPDATE_PROFIL_USER:
      return {
        ...state,
        isEdited: true
      }

    case UPDATE_PROFIL_DOG:
      return {
        ...state,
        isEdited: true,
        isEditDogModalOpen: !state.isEditDogModalOpen
      }
 
    case DOG_INFO_SUCCESS:
      return {
        ...state,
        isModalDogOpen: false,
        //ici je remplis doglist
        doglist: [...state.doglist, action.payload],
        inputs_dog: {
          ...state.inputs_dog,
          ...action.payload
        }
      }
      
    case FETCH_DOG_INFO : 
      return {
        ...state,
        doggie_id: action.payload

      }
    case FETCH_DOG_INFO_SUCCESS:
      return {
        ...state,
        // ...state.slice(0, index),
        doglist: action.payload,
        inputs_dog: {
          ...state.inputs_dog,
          ...action.payload
        },
      }

    case SHOW_PRESENTATION:
      return {
        ...state,
        isPresentationActive: true,
        isDogPresentationActive: false,
        isEventActive: false
      }

    case SHOW_DOG_PRESENTATION:
      return {
        ...state,
        isPresentationActive: false,
        isDogPresentationActive: true,
        isEventActive: false
      }

    case SHOW_EVENT:
      return {
        ...state,
        isPresentationActive: false,
        isDogPresentationActive: false,
        isEventActive: true
      }

    case CHANGE_DOG_PROFIL:
      return {
        ...state,
        inputs_dog: {
          ...state.inputs_dog,
          ...action.payload
        }
      }
      
      case CHANGE_INFO_DOG_PROFIL:
        return {
          ...state,
          inputs_dog: {
            ...state.inputs_dog,
            ...action.payload
          }
        }
    default:
      // puis on renvoi le state
      return state;
  }
};

export default reducer;
