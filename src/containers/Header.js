import {connect} from 'react-redux';
import Header from 'src/components/Header';

import { userLogout } from 'src/actions/user';
import { toggleButtonProfil } from 'src/actions/index';
import { toggleEventsModal } from 'src/actions/event';
import HeaderGuest from './HeaderGuest';

const mapStateToProps = (state) => ({
  loggedMessage: state.user.loggedMessage,
  isActive: state.header.isActive,
  isEventOpen: state.modalsEvent.modalType,
  user_id: state.user.user_id
});

const mapDispatchToProps = (dispatch) => ({ 

  handleLogout: () => {
    // e.preventDefault();
    localStorage.clear();
    window.location.reload();
    const action = userLogout();
    dispatch(action);
  },

  ChangeisActive: () => {
    const action = toggleButtonProfil();
    dispatch(action)
  },

  toggleEvents: () => {
    const action = toggleEventsModal();
    dispatch(action)
  },

 

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
