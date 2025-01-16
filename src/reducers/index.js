import { combineReducers } from 'redux';

import userReducer from './user';
import modalsInscriptionReducer from './modalsInscription';
import userInscriptionReducer from './userInscription';
import selectReducer from './select';
import userListReducer from './userList';
import FormChatReducer from './FormChat';
import inboxSearchMessageReducer from './inboxSearchMessage';
import modalEventsReducer from './modalsEvent';
import headerReducer from './header';
import editprofilReducer from './editprofil';
import eventsPageReducer from './eventsPage';
import modalsDeleteEventReducer from './modalsDeleteEvent';

const rootReducer = combineReducers({
  user: userReducer,
  modalsInscription: modalsInscriptionReducer,
  userInscription: userInscriptionReducer,
  select: selectReducer,
  userList: userListReducer,
  FormChat: FormChatReducer,
  inboxSearchMessage: inboxSearchMessageReducer,
  modalsEvent: modalEventsReducer,
  header: headerReducer,
  editprofil: editprofilReducer,
  eventsPage: eventsPageReducer,
  modalsDeleteEvent: modalsDeleteEventReducer,
  
  
});

export default rootReducer;
