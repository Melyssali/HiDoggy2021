import { connect } from 'react-redux';
import LeftProfil from 'src/components/ProfilPage/LeftProfil';
import { fetchUserInfo } from 'src/actions/fetchUsersFilters';
import { editProfilUser, updateProfilUser, showPresentation, showDogPresentation, updateProfilDog, modalDog, fetchDogInfo, changeDogProfil,showEvent, editModalDog, changingMessageEdit, deleteDog } from 'src/actions/profil';
// import { dogAdded } from '../actions/profil';
import { deleteEventsModal } from 'src/actions/event';
import { showEventList } from 'src/actions/fetchEvents';

const mapStateToProps = (state) => ({
  userpresentation: state.editprofil.inputs.userpresentation,
  username: state.editprofil.inputs.username,
  isEdited: state.editprofil.isEdited,
  isPresentationActive: state.editprofil.isPresentationActive,
  isDogPresentationActive: state.editprofil.isDogPresentationActive,
  isEventActive: state.editprofil.isEventActive,
  doglist: state.editprofil.doglist,
  userprofile_pic: state.editprofil.inputs.userprofile_pic,
  isModalDogOpen: state.editprofil.isModalDogOpen,
  user_id: state.user.user_id,
  profile_pic: state.editprofil.profile_pic,
  isEditDogModalOpen: state.editprofil.isEditDogModalOpen,
  myEventsList : state.eventsPage.myEventsList,
  isDeleteEventModalOpen : state.modalsDeleteEvent.isDeleteEventModalOpen,
  name: state.editprofil.inputs_dog.name ,
  race: state.editprofil.inputs_dog.race,
  birthday: state.editprofil.inputs_dog.birthday,
  description: state.editprofil.inputs_dog.description,
  isEditDog: state.editprofil.isEditDog,
  id: state.eventsPage.id,
  isDeletedEvent: state.modalsDeleteEvent.isDeletedEvent,
  isDogDeleted: state.editprofil.isDogDeleted,
  eventsList: state.editprofil.eventsList

}) ;


const mapDispatchToProps = (dispatch) => ({
 // -------------------------- USERS
 
  handleChange: (evt) => {
    console.log(`l'user a tapé dans l'input: ${[evt.target.name]}, la valeur: ${evt.target.value}.`);
    const action = editProfilUser({[evt.target.name]: evt.target.value
    });
    dispatch(action);
  },

  handleClick: (e) => {
    e.preventDefault();
    console.log("changements validés");
    const action = updateProfilUser();
    dispatch(action);
  },

  activeFetchUsersInfo: (historylocation) => {
    const action = fetchUserInfo(historylocation);
    dispatch(action)
  },
  changeMessage: () => {
    const action = changingMessageEdit();
    dispatch(action)
  },
 // -------------------------- Button presentation / dog / event
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

 // -------------------------- DOGS
  
  handleChangeDogProfil: (evt) => {
    evt.preventDefault();
    console.log(`voici les infos ${[evt.target.name]}${evt.target.value}`)
    const action = changeDogProfil({[evt.target.name]: evt.target.value
    });
    dispatch(action);
  },

  handleClickDogProfil: (evt, dog_id) => {
    evt.preventDefault();
    const action = updateProfilDog(dog_id)
    dispatch(action);
  },

  activeFetchDogInfo: (historylocation) => {
    const action = fetchDogInfo(historylocation);
    dispatch(action);
  },
  ModalAddingDog: () => {
    const action = modalDog();
    dispatch(action)
  },

  editDog: (e, dog_id) => {
    console.log("dog_id : ", dog_id);
    e.preventDefault()
    const action = editModalDog(dog_id);
    dispatch(action)
  },
 // -------------------------- EVENT
  toggleDeleteEvents: (e, id) => {
    e.preventDefault()
    console.log("j'ai cliqué sur la modale toggleDeleteEvent", id)
    // Je veux fabriquer un objet d 'action
    const action = deleteEventsModal(id);
    // Et le dispatcher
    dispatch(action);
  },

  fetchParticipateListEvents: (historylocation) => {
    console.log("EVENT : ", historylocation)
    const action = showEventList(historylocation);
    dispatch(action);
  },

  deletingDog: (e, dog_id) => {
    e.preventDefault();
    const action = deleteDog(dog_id);
    dispatch(action);
  }

  
});







export default connect(mapStateToProps, mapDispatchToProps)(LeftProfil);
