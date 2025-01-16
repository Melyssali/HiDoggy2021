import { connect } from 'react-redux';
import Inbox from 'src/components/MessagesApp/Inbox';
import data from 'src/data/users';

const mapStateToProps = (state) => ({
  message: data.message,
  user: data.user,
  content: data.content,
  inputSearch: state.inboxSearchMessage.inputSearch,

});

const mapDispatchToProps = null ;

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);

