import { connect } from "react-redux";
import SearchMessage from 'src/components/MessagesApp/Inbox/SearchMessage';
import { searchedMessage } from "../actions/chat";


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  inputSearch: (evt) => {
    const action = searchedMessage(evt.target.value);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMessage);
