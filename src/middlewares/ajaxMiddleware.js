import axios from 'axios';

import {
  USER_LOGIN,
  // USER_LOGIN_SUCCESS,
  userLoginSuccess,
  loginError,
  USER_INSCRIPTION,
  userInscriptionSuccess,
  userInscriptionError,
  ADD_FRIEND,
  addFriendSuccess,
  FETCH_FRIEND,
  fetchFriendSuccess,
  FETCH_PROFIL_FRIEND
}
  from 'src/actions/user';

import {
  FETCH_USERS,
  fetchUsersSuccess,
  FETCH_USER_INFO,
  fetchUserInfoSuccess
} from 'src/actions/fetchUsersFilters';

import {
  CREATE_EVENT,
  createEventSuccess,
  createEventError,
  CONFIRMATION_DELETE_EVENTS,
  confirmationDeleteEventsSuccess,
  DELETE_EVENTS_MODAL,
} from 'src/actions/event';

import {
  FETCH_EVENTS,
  fetchEventsSuccess,
  fetchParticipateEventSuccess,
  SHOW_EVENT_LIST,
  showEventListSuccess,
} from 'src/actions/fetchEvents'

import {
  UPDATE_PROFIL_USER,
  editProfilUserSucess,
  editProfilDogSuccess,
  fetchDogInfoSuccess,
  DOG_INFO,
  dogInfoSuccess,
  FETCH_DOG_INFO,
  UPDATE_PROFIL_DOG,
  DELETE_DOGGIE,
  deleteDoggieSuccess,
  DELETE_DOG,
  deleteDogSuccess
} from 'src/actions/profil';
import { FETCH_PARTICIPATE_EVENT } from '../actions/fetchEvents';


export default (store) => (next) => (action) => {

  switch (action.type) {

    // Récupérer la liste des users avec pseudo, nom de ville, race, sexe du chien
    case FETCH_USERS:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users`,
      })
        .then((res) => {
          console.log("Je recupere la liste des utilisateurs inscrits :", res.data);
          const actionToSend = fetchUsersSuccess(res.data);
          store.dispatch(actionToSend);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    // Envoyé au back les infos sur la création d'évènement que l'utilisateur a saisie 
    case CREATE_EVENT:
      axios({
        method: 'post',
        url: `${process.env.LINK_BACK}/v1/events/${store.getState().user.user_id}`,
        data: store.getState().modalsEvent.inputs,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("Je crée un event :", res.data);
          const actionToSend = createEventSuccess(res.data);
          store.dispatch(actionToSend);
         
        })
        .catch((err) => {
          console.error('erreur de creation event', err);
          const actionToSend = createEventError();
          store.dispatch(actionToSend);

        });
      break;

    case USER_LOGIN:
      axios({
        method: 'post',
        url: `${process.env.LINK_BACK}/v1/login`,
        // withCredentials: true,
        data: store.getState().user.inputs,
      })
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem('token', token);

          console.log("je me log :", res.data)
          if (res.data === 'Wrong password/mail or create an account') {
            const actionToSend = loginError(res.data);
            store.dispatch(actionToSend);
          }
          else {
            const actionToSend = userLoginSuccess(res.data);
            store.dispatch(actionToSend)
          }
        })
        .catch((err) => {
          console.error('ceci est une erreur attrapé pour le login', err);
          const actionToSend = loginError();
          store.dispatch(actionToSend);
        });
      break;

    case USER_INSCRIPTION:
      axios({
        method: 'post',
        url: `${process.env.LINK_BACK}/v1/users`,
        data: store.getState().userInscription.inputs,
      })
        .then((res) => {
          console.log("je m'inscris : ", res.data);

          const actionToSend = userInscriptionSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.error(err);
          const actionToSend = userInscriptionError();
          store.dispatch(actionToSend);
        });
      break;

    case UPDATE_PROFIL_USER:
      axios({
        method: 'patch',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}`,
        data: store.getState().editprofil.inputs,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("j'update mon profil : ", res.data);

          const actionToSend = editProfilUserSucess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log(err);

        })
      break;

    case FETCH_USER_INFO:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users/${action.payload}`,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("Je récupère les infos utilisateurs :", res.data)
          const actionToSend = fetchUserInfoSuccess(res.data);
          store.dispatch(actionToSend);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    // EVENEMENTS SUR LA PAGE EVENTS
    case FETCH_EVENTS:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/events`,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("voici la liste des events :", res.data);
          const actionToSend = fetchEventsSuccess(res.data);
          store.dispatch(actionToSend);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    // C H I E N S 
    case DOG_INFO:
      axios({
        method: 'post',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/dog`,
        data: store.getState().editprofil.inputs_dog,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {

          console.log("J'envoie les informations des chiens que j'ai saisi :", res.data)
          const actionToSend = dogInfoSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

    case FETCH_DOG_INFO:
      console.log(action.payload);
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users/${action.payload}/dogs`,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("Je récupère la liste des chiens :", res.data)

          const actionToSend = fetchDogInfoSuccess(res.data);
          store.dispatch(actionToSend);
        })
        .catch((err) => {
          console.log(err);
        });
      break

      // case FETCH_DOG_INFO_USER:
      //   axios({
      //     method: 'get',
      //     url: `${process.env.LINK_BACK}/v1/users/${action.payload}/dogs`,
      //     headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      //   })
      //     .then((res) => {
      //       console.log("Je récupère la liste des chiens :", res.data)
  
      //       const actionToSend = fetchDogInfoUserSuccess(res.data);
      //       store.dispatch(actionToSend);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //   break

    case UPDATE_PROFIL_DOG:
      axios({
        method: 'patch',
        url: `${process.env.LINK_BACK}/v1/dog/${store.getState().editprofil.dog_id}`,
        data: store.getState().editprofil.inputs_dog,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("j'update le profil de mon chien : ", res.data);
          const actionToSend = editProfilDogSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log(err);

        })
      break;

    // L'utilisateur informe qu'il va participer à tel évènement
    case FETCH_PARTICIPATE_EVENT:
      axios({
        method: 'post',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/events/${action.payload}`,

        data: store.getState().eventsPage.id,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {

          console.log("j'envoie l'info de la participation de l'user à un évènement :", res.data)
          const actionToSend = fetchParticipateEventSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

    // Je récupère les évènements auquel l'user souhaite participer
    case SHOW_EVENT_LIST:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users/${action.payload}/events`,
        // data: store.getState().,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("Je récupère les évènements auxquels l'user souhaite participer :", res.data)
          const actionToSend = showEventListSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

    case ADD_FRIEND:
      axios({
        method: 'patch',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/doggies/${action.payload} `,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("J'ajoute un ami : ", res.data);
          const actionToSend = addFriendSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log(err);

        })
      break;
      case DELETE_DOGGIE:
        console.log("voici l'id de l'ami pour action delete : ", action.payload)
        axios({
          method: 'patch',
          url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/undoggies/${action.payload} `,
          headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
        })
          .then((res) => {
            console.log("Je supprime un ami : ", res.data);
            const actionToSend = deleteDoggieSuccess(res.data);
            store.dispatch(actionToSend)
          })
          .catch((err) => {
            console.log(err);
          })
        break;

    case FETCH_FRIEND:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/doggies`,
        // data: store.getState().,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {

          console.log("Je récupère la liste de mes amis : ", res.data)
          const actionToSend = fetchFriendSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

    case FETCH_PROFIL_FRIEND:
      axios({
        method: 'get',
        url: `${process.env.LINK_BACK}/v1/users/${action.payload}/doggies`,

        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {

          console.log("Je charge la liste des amis de l'utilisateur sur lequel je clique : ", res.data)
          const actionToSend = fetchFriendSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

      // Confirmation de suppression de participation à un event envoyé à la BDD
      case CONFIRMATION_DELETE_EVENTS:
      axios({
        method: 'delete',
        url: `${process.env.LINK_BACK}/v1/users/${store.getState().user.user_id}/events/${store.getState().modalsDeleteEvent.idEvent}`,

        // data: store.getState().modalsDeleteEvent.,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {

          console.log("data confirmation delete events success :", res.data)
          const actionToSend = confirmationDeleteEventsSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

      case DELETE_DOG:
      axios({
        method: 'delete',
        url: `${process.env.LINK_BACK}/v1/dog/${action.payload}`,
        headers: { 'Authorization': `Bearer ${store.getState().user.token}` }
      })
        .then((res) => {
          console.log("data confirmation delete dog success :", res.data)
          const actionToSend = deleteDogSuccess(res.data);
          store.dispatch(actionToSend)
        })
        .catch((err) => {
          console.log("voici l'erreur : ", err)
        });
      break;

  }
  next(action);
};


