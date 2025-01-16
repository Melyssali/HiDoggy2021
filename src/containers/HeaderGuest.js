import {connect} from 'react-redux';
import HeaderGuest from 'src/components/HeaderGuest';

import { toggleInscriptionModal, toggleConnexionModal } from 'src/actions/index';
// import e from 'express';
import { userLogout } from 'src/actions/user';

// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => {
  return {
  isInscriptionOpen: state.modalsInscription.modalType,
  isConnexionOpen: state.modalsInscription.modalTypeConnexion,
  isLogged: state.user.logged,
  inscriptionOk: state.userInscription.inscriptionOk
  
}};

const mapDispatchToProps = (dispatch) => ({
  toggleInscription: () => {
    // Je veux fabriquer un objet d'action
    const action = toggleInscriptionModal();
    // Et le dispatcher
    dispatch(action);
  },
  toggleConnexion: () => {
    // Je veux fabriquer un objet d'action
    const action = toggleConnexionModal();
    // Et le dispatcher
    dispatch(action);
  },

  handleLogout: () => {
    // e.preventDefault()
    localStorage.clear();
    window.location.reload();
    //console.log("logout")
    const action = userLogout();
    dispatch(action)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderGuest);
