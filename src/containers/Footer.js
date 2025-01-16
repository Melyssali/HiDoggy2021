import { connect
} from 'react-redux';
import Footer from 'src/components/Footer';

// import actions creators
import { toggleAbout } from 'src/actions/index';


// Si j'ai besoin de dispatcher des actions:
// la fonction dispatch
// l'action creator pour fabriquer l'objet d'action


const mapStateToProps = (state) => ({


});

const mapDispatchToProps = (dispatch) => ({
  openAbout: () => {
    const action = toggleAbout();
    dispatch(action);
  },

}) ;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
