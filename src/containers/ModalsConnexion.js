import {
  connect
} from 'react-redux';
import ModalsConnexion from 'src/components/ModalsConnexion';
// import UserList from 'src/components/Home/UserList';

// import actions creators
import {
  toggleConnexionModal
} from 'src/actions/index';
import {
  userLogin,
  userLogout,
  userInputChange,
  loginError,
} from 'src/actions/user';


// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({
  email: state.user.inputs.email,
  password: state.user.inputs.password,
  isLogged: state.user.logged,
  isOpened: state.user.settingsOpened,
  errormessage:state.user.errormessage
  // pseudo: state.user.pseudo,


});

const mapDispatchToProps = (dispatch) => ({
  //close modal - change state to false
  toggleConnexion: () => {
    // Je veux fabriquer un objet d 'action
    const action = toggleConnexionModal();
    // Et le dispatcher
    dispatch(action);
  },

  handleLogin: (e) => {
    e.preventDefault();
    // loginError(validationConnexion(email, password));
    //console.log("click sur handlelogin")
    const action = userLogin();
    dispatch(action)
  },
  handleLogout: () => {
    //console.log("logout")
    const action = userLogout();
    dispatch(action)
  },

  changeField: (evt) => {
    console.log(`l'user a tapé dans l'input: ${[evt.target.name]}, la valeur: ${evt.target.value}.`)
    // je donne un objet avec le nom de l'input (entre crochet pour qu'il évolue en fonction de l'input où on est) et la valeur
    const action = userInputChange({
      [evt.target.name]: evt.target.value
    })
    dispatch(action)
  },


  // handleError: () => {
  //   console.log("wrong email or password");
  //   const action = loginError();
  //   dispatch(action);
  // },



});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsConnexion);
