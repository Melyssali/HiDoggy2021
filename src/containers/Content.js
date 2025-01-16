import { connect } from 'react-redux';
import Content from 'src/components/MessagesApp/Messages/Content';


const mapStateToProps = (state) => ({
  list: state.FormChat.messages,
  userprofile_pic: state.editprofil.inputs.userprofile_pic,


});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
