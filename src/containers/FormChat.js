import { connect } from 'react-redux';
import Form from 'src/components/MessagesApp/Messages/Form';
import { messageInputChange, messageSubmit } from 'src/actions/chat';

const mapStateToProps = (state) => ({
  inputValue: state.FormChat.inputText,
  
  
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (textSaisi) => { 
    console.log('change', textSaisi )
    const action = messageInputChange(textSaisi);
    dispatch(action);
  },
  
  onFormSubmit: () => { 

    const action = messageSubmit();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
