import { connect } from 'react-redux';
import UserRightProfils from 'src/components/UserProfils/UserRightProfils';
import { fetchFriend, fetchProfilFriend } from 'src/actions/user';

// import { fetchUserInfo } from 'src/actions/fetchUsersFilters';


const mapStateToProps = (state) => ({
  userpresentation: state.editprofil.inputs.userpresentation,
  friendlist: state.editprofil.friendlist,
  userlanguages: state.editprofil.inputs.userlanguages,
  usercity: state.editprofil.inputs.usercity,
  userregistration_date: state.editprofil.inputs.userregistration_date
}) ;


const mapDispatchToProps = (dispatch) => ({
  
  activeFetchFriend: (historylocation) => {
    const action = fetchProfilFriend(historylocation);
    dispatch(action)
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(UserRightProfils);
