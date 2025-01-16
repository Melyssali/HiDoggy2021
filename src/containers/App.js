import { connect } from 'react-redux';
import App from 'src/components/App';


const mapStateToProps = (state) => ({
  user_id: state.user.user_id,
  isLogged: state.user.logged,
  doggie_id: state.editprofil.doggie_id

});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
