import {connect} from 'react-redux';
import EventsPage from '/src/components/EventsPage';

// import actions creators
import {
  fetchEvents,
  fetchEventsSuccess,
  fetchParticipateEvent,
} from 'src/actions/fetchEvents';

import { changeCityEvent } from 'src/actions/select';
// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({
  eventsList: state.eventsPage.eventsList,
  id: state.eventsPage.id,
  selectedCityEvent: state.select.city,
  isCreated: state.modalsEvent.created,

 });



const mapDispatchToProps = (dispatch) => ({
 
  fetchEventsListAxios: () => {
    const action = fetchEvents();
    dispatch(action);
  },

  // Click on the button "participate"
  handleParticipateEvent: (e, id) => {
    e.preventDefault();
    const action = fetchParticipateEvent(id);
    dispatch(action);
  },
  
  changeCityFilter: (evt) => {
    console.log(`l'user a selectionné: ${[evt.target.name]}, la valeur: ${evt.target.value}.`)
    // je donne un objet avec le nom de l'input (entre crochet pour qu'il évolue en fonction de l'input où on est) et la valeur
    const action = changeCityEvent(evt.target.value)
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
