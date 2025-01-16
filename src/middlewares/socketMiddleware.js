import { USER_LOGIN_SUCCESS } from 'src/actions/user';
import { MESSAGE_SUBMIT, messageReceived } from 'src/actions/chat';
// import io from 'socket.io-client';
// je mets la variable socket à l'exterieur du middleware pour ne pas qu'elle soit détruite après 
// chaque execution du middleware
let socket;

export default (store) => (next) => (action) => {
  switch (action.type) {
    case MESSAGE_SUBMIT:
 
      // j'ai besoin de fabriquer un objet "message" avec author et content à l'intérieur
      // pour l'envoyer à mon server. Le serveur va rajouter l'ID et envoyer ce message
      // à tous les clients, moi compris.
      socket.emit('chat message' , {
				pseudo: store.getState().FormChat.pseudo, 
				content: store.getState().FormChat.inputText,
			})
     break; 

    case USER_LOGIN_SUCCESS:
      // la variable "socket" contient "la corde" qui va permettre d'échanger avec le serveur - le back
      socket = io('http://localhost:3000', { transports : ['websocket'] });
	    // j'utilise la variable pour écouter tous les messages du serveur. il faut la même adresse que côté back - dans io.emit 'adresse'
			//pour recevoir un message du back
      socket.on('chat message' , (msg) => {
				console.log("on vient de recevoir :", msg)

        const action = messageReceived(msg);
        store.dispatch(action);
			});
    break;

}
  next(action);

}
