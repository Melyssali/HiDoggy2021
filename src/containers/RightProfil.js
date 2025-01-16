import { connect } from 'react-redux';
import RightProfil from 'src/components/ProfilPage/RightProfil';
import { editProfilUser, updateProfilUser } from 'src/actions/profil';
import { fetchFriend } from 'src/actions/user';
import { deleteDoggie } from 'src/actions/profil';


const mapStateToProps = (state) => ({
  userpresentation : state.editprofil.inputs.userpresentation,
  userlanguages : state.editprofil.inputs.userlanguages,
  usercity : state.editprofil.inputs.usercity,
  userregistration_date : state.editprofil.inputs.userregistration_date,
  friendlist: state.editprofil.friendlist,
  isDeletedDoggie: state.editprofil.isDeletedDoggie
    
}) ;


const mapDispatchToProps = (dispatch) => ({
  activeFetchFriend: () => {
    const action = fetchFriend();
    dispatch(action)
  },

  handleChange: (evt) => {
    console.log(`l'user a tapé dans l'input: ${[evt.target.name]}, la valeur: ${evt.target.value}.`);
    const action = editProfilUser({[evt.target.name]: evt.target.value
    });
    dispatch(action)
},
  deleteDoggies : (e, user_id) => {
    e.preventDefault();
    const action = deleteDoggie(user_id);
    dispatch(action)

}
});

export default connect(mapStateToProps, mapDispatchToProps)(RightProfil);
