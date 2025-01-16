import {
  connect
} from 'react-redux';
import Select from 'src/components/Home/Select';

// import actions creators

import { fetchSearch, changeUserFilter } from 'src/actions/select';



// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action

const mapStateToProps = (state) => {
  return {
  city: state.select.inputs.city,
  race: state.select.inputs.race,
  dog_gender: state.select.inputs.dog_gender,
  

}};

const mapDispatchToProps = (dispatch) => ({
  //close modal - change state to false
  handleSearch: () => {
   // console.log("clic sur Search")
    // Je veux fabriquer un objet d 'action
    const action = fetchSearch();
    // Et le dispatcher
    dispatch(action);
  },

  changeFilterSearch: (evt) => {
    console.log(`l'user a selectionné: ${[evt.target.name]}, la valeur: ${evt.target.value}.`)
    // je donne un objet avec le nom de l'input (entre crochet pour qu'il évolue en fonction de l'input où on est) et la valeur
    const action = changeUserFilter({
      [evt.target.name]: evt.target.value
    })
    dispatch(action);
  },

  
  }

);

export default connect(mapStateToProps, mapDispatchToProps)(Select);
