import { connect
} from 'react-redux';
import HomeLogged from 'src/components/Home/HomeLogged';
import { userLogin, userLoginSuccess } from 'src/actions/user';
import { fetchUserInfo } from '../actions/fetchUsersFilters';


const mapStateToProps = (state) => ({
  users: state.userList.list,
  user_id: state.user.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  openUserProfil: () => {
    const action = fetchUserInfo()
    dispatch(action);
  }


});


export default connect(mapStateToProps, mapDispatchToProps)(HomeLogged);
