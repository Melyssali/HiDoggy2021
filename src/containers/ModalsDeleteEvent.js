import {
  connect
} from 'react-redux';

import ModalsDeleteEvent from 'src/components/ModalsDeleteEvent';

// import actions creators
import {
  deleteEventsModal,
  confirmationDeleteEvents,

} from 'src/actions/event';


const mapStateToProps = (state) => ({
  isDeleteEventModalOpen: state.modalsDeleteEvent.isDeleteEventModalOpen,
  myEventsList : state.eventsPage.myEventsList,
  id: state.modalsDeleteEvent.idEvent,
  isDeletedEvent: state.modalsDeleteEvent.isDeletedEvent,
});

const mapDispatchToProps = (dispatch) => ({
  //close modal - change state to false
  toggleDeleteEvents: () => {
    console.log("j'ai cliqué sur la modale toggleDeleteEvent")
    // Je veux fabriquer un objet d 'action
    const action = deleteEventsModal();
    // Et le dispatcher
    dispatch(action);
  },

  handleDeleteEvents: (evt) => {
    evt.preventDefault();
    console.log("j'ai cliqué sur la confirmation de suppression de l'évènement");
    const action = confirmationDeleteEvents();
    dispatch(action);
  },

  

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsDeleteEvent);
