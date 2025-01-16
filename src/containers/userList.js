import {
  connect
} from 'react-redux';
import UserList from 'src/components/Home/UserList';
import { fetchUsers } from 'src/actions/fetchUsersFilters';

// import actions creators
import {
  toggleConnexionModal
} from 'src/actions/index';
// 
// import { findUsers } from 'src/selectors/filter'

// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => {
  return {
  username: state.userInscription.inputs.username,
  selectedCity: state.select.inputs.city,
  selectedRace: state.select.inputs.race,
  selectedDog_gender: state.select.inputs.dog_gender,
  users: state.userList.list,
  isSearching: state.select.isSearching,

}};

const mapDispatchToProps = (dispatch) => ({
  activeFetchUsers: () => {
    // Je veux fabriquer un objet d 'action
    const action = fetchUsers();
    // Et le dispatcherxs
    dispatch(action);
  },

  toggleConnexion: () => {
    // Je veux fabriquer un objet d 'action
    const action = toggleConnexionModal();
    // Et le dispatcher
    dispatch(action);
  },

  });

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
