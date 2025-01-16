import { connect } from 'react-redux';
import EditDogModal from '/src/components/ProfilPage/LeftProfil/EditDogModal';
import { editModalDog, changeDogProfil, updateProfilDog, fetchDogInfo } from 'src/actions/profil';




const mapStateToProps = (state) => ({
    race: state.editprofil.inputs_dog.race,
    dog_gender: state.editprofil.inputs_dog.dog_gender,
    birthday: state.editprofil.inputs_dog.birthday,
    description: state.editprofil.inputs_dog.description,
    name: state.editprofil.inputs_dog.name,
    dog_id: state.editprofil.dog_id,
    doglist: state.editprofil.doglist,
});




const mapDispatchToProps = (dispatch) => ({

    

      editDog: (e) => {
        e.preventDefault()
        const action = editModalDog();
        dispatch(action)
      },

      handleClickDogProfil: (evt) => {
        evt.preventDefault();
        const action = updateProfilDog()
        dispatch(action);
      },

      handleChangeDogProfil: (evt) => {
        evt.preventDefault();
        console.log(`voici les infos ${[evt.target.name]}${evt.target.value}`)
        const action = changeDogProfil({[evt.target.name]: evt.target.value
        });
        dispatch(action);
      },
});
  


export default connect(mapStateToProps, mapDispatchToProps)(EditDogModal);
  