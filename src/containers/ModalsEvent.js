import {
  connect
} from 'react-redux';

import ModalsEvent from 'src/components/ModalsEvent';

// import actions creators
import {
  toggleEventsModal,
  createEvent,
  changeInputEvent
} from 'src/actions/event';

// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({
  name: state.modalsEvent.inputs.name,
  date: state.modalsEvent.inputs.date,
  time: state.modalsEvent.inputs.time,
  adress: state.modalsEvent.inputs.adress,
  city: state.modalsEvent.inputs.city,
  access_pmr: state.modalsEvent.inputs.access_pmr,
  isEventOpen: state.modalsEvent.modalType,
  isCreated: state.modalsEvent.created,

});

const mapDispatchToProps = (dispatch) => ({
  //close modal - change state to false
  toggleEvents: () => {
    // Je veux fabriquer un objet d 'action
    const action = toggleEventsModal();
    // Et le dispatcher
    dispatch(action);
  },

  handleCreate: (pushHistory) => {
    const action = createEvent();
    dispatch(action);
    pushHistory();
  },

  changeFieldEvent: (evt) => {
    console.log(`l'user a tapé dans l'input: ${[evt.target.name]}, la valeur: ${evt.target.value}.`)
    const action = changeInputEvent({
      [evt.target.name]: evt.target.value});
      dispatch(action);
  }
  // changeFieldInscription: (evt) => {
  //   const action = changeFieldEvent({[evt.target.name] : evt.target.value});
  //   dispatch(action);
  // }




});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsEvent);
