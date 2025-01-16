import { connect } from 'react-redux';
import DogIdentity from 'src/components/ProfilPage/LeftProfil/DogIdentity';
import { changeDogProfil, updateProfilDog} from 'src/actions/profil';


const mapStateToProps = (state) => ({
  race: state.editprofil.race,
  sexe: state.editprofil.sexe,
  birthday: state.editprofil.birthday,
  caractere: state.editprofil.caractere,
  name: state.editprofil.name,
});

const mapDispatchToProps = (dispatch) => ({

  handleChangeDogProfil: (evt) => {
    evt.preventDefault();
    const action = changeDogProfil({[evt.target.name]: evt.target.value
    });
    dispatch(action);
  },
  
  handleClickDogProfil: () => {
    const action = updateProfilDog()
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(DogIdentity);
