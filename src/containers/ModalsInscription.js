import { connect } from 'react-redux';
import ModalsInscription from 'src/components/ModalsInscription';


import { toggleInscriptionModal } from '/src/actions/index';
import { userInputChangeInscription, userInscription } from 'src/actions/user';

// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({
    isRegistered: state.userInscription.registered,
    useremail: state.userInscription.inputs.useremail,
    username: state.userInscription.inputs.username,
    userbirthdate: state.userInscription.inputs.userbirthdate,
    userpassword: state.userInscription.inputs.userpassword,
  }
);

const mapDispatchToProps = (dispatch) => ({
  toggleInscription: () => {
    // Je veux fabriquer un objet d 'action
    const action = toggleInscriptionModal();
    // Et le dispatcher
    dispatch(action);
  },

  changeFieldInscription: (evt) => {
    console.log(`l'user a tapé dans l'input: ${[evt.target.name]}, la valeur: ${evt.target.value}.`)
    // je donne un objet avec le nom de l'input (entre crochet pour qu'il évolue en fonction de l'input où on est) et la valeur
    const action = userInputChangeInscription({[evt.target.name]: evt.target.value
    })
    dispatch(action);

  },
  handleRegister : (e) => {
    e.preventDefault();
    //console.log("is register");
    const action = userInscription();
    dispatch(action);

  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsInscription);
