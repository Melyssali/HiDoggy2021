import { connect } from 'react-redux';
import UserLeftProfils from 'src/components/UserProfils/UserLeftProfils';

import { fetchUserInfo } from 'src/actions/fetchUsersFilters';
import { addFriend } from 'src/actions/user';
import {showPresentation, showEvent, showDogPresentation, fetchDogInfo} from 'src/actions/profil';
import { showEventList } from 'src/actions/fetchEvents';

const mapStateToProps = (state) => ({
  userpresentation: state.editprofil.inputs.userpresentation,
  userprofile_pic: state.editprofil.inputs.userprofile_pic,
  myEventsList : state.eventsPage.myEventsList,
  isEventActive: state.editprofil.isEventActive,
  doglist: state.editprofil.doglist,
  isDogPresentationActive: state.editprofil.isDogPresentationActive,
  isPresentationActive: state.editprofil.isPresentationActive,
  friendAdded: state.editprofil.friendAdded,
  username: state.editprofil.inputs.username,

}) ;


const mapDispatchToProps = (dispatch) => ({

  handleAddFriend: (e, historylocation) => {
    e.preventDefault();
    const action = addFriend(historylocation);
    dispatch(action)
  },

  activeFetchUsersInfo: (historylocation) => {
    const action = fetchUserInfo(historylocation);
    dispatch(action)
  },

  handleClickUser: (evt) => {
    evt.preventDefault();
    const action = showPresentation();
    dispatch(action);
  },
  
  handleClickEvent: (evt) => {
    evt.preventDefault();
    const action = showEvent();
    dispatch(action);
  },

  handleClickDog: (evt) => {
    evt.preventDefault();
    const action = showDogPresentation();
    dispatch(action);
  },
  activeFetchDogInfo: (historylocation) => {
    const action = fetchDogInfo(historylocation);
    dispatch(action);
  },

  fetchParticipateListEvents: (historylocation) => {
    const action = showEventList(historylocation);
    dispatch(action);
  }
});







export default connect(mapStateToProps, mapDispatchToProps)(UserLeftProfils);
