import { connect
} from 'react-redux';
import Home from 'src/components/Home';

// import actions creators



// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({
  isRegistered: state.userInscription.registered,
  user_id: state.user.user_id,
  logged: state.user.logged,
  token: state.user.token
  // searchedusers: state.searchedusers.list,
  // users: state.filters.list

});

const mapDispatchToProps = null ;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
