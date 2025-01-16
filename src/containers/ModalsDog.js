import { connect } from 'react-redux';
import ModalsDog from '/src/components/ProfilPage/LeftProfil/ModalsDog';
import { changeDogProfil, updateProfilDog, dogInfo, fetchDogInfo, modalDog } from 'src/actions/profil';


const mapStateToProps = (state) => ({
    isModalDogOpen: state.editprofil.isModalDogOpen,
    race: state.editprofil.race,
    dog_gender: state.editprofil.dog_gender,
    birthday: state.editprofil.birthday,
    description: state.editprofil.description,
    name: state.editprofil.name,
    dog_id: state.editprofil.dog_id
});

const mapDispatchToProps = (dispatch) => ({

    handleChangeDogProfil: (evt) => {
      evt.preventDefault();
      console.log(`voici les infos ${[evt.target.name]}${evt.target.value}`)
      const action = changeDogProfil({[evt.target.name]: evt.target.value
      });
      dispatch(action);
    },
  
    handleClickDogProfil: (evt) => {
      evt.preventDefault();
      const action = dogInfo()
      dispatch(action);
    },
  
   
    ModalAddingDog: () => {
        const action = modalDog();
        dispatch(action)
      }
  })

export default connect(mapStateToProps, mapDispatchToProps)(ModalsDog);
