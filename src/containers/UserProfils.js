import { connect } from 'react-redux';
import UserLeftProfils from 'src/components/UserProfils';

import { fetchUserInfo } from 'src/actions/fetchUsersFilters';


const mapStateToProps = (state) => ({
  userpresentation: state.editprofil.inputs.userpresentation,

}) ;


const mapDispatchToProps = (dispatch) => ({

  activeFetchUsersInfo: () => {
    const action = fetchUserInfo();
    dispatch(action)
  },


});







export default connect(mapStateToProps, mapDispatchToProps)(UserLeftProfils);
