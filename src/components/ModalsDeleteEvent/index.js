import React, {useEffect} from 'react';
import hidoggyLogo from '../../assets/logo/Logo.png';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { NavLink } from 'react-router-dom';

// import './styles.scss';

// LA MODALE ALERTE AVANT DE SUPPRIMER UNE BALADE
const ModalsDeleteEvent = ({
  toggleDeleteEvents,
  handleDeleteEvents,
  myEventsList,
  id,
  fetchParticipateListEvents,

}) => {

  const history = useHistory();
  const historylocation = history.location.pathname.split("/events/")[1];
  
 


  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Attention</p>
          <button className="delete" onClick={toggleDeleteEvents} aria-label="delete"></button>
        </header>



        <section className="modal-card-body">
          <div className="message-body message_areyousure">

            <div> Êtes vous certain(e)s de ne plus vouloir participer à l'évènement ?
            </div>

          </div>
        </section>


        <form>
          <footer className="modal-card-foot">

            <button onClick={handleDeleteEvents} className="button is-primary"> Oui</button>
            <button onClick={toggleDeleteEvents} className="button is-link">Non</button>
          </footer>
        </form>

      </div>
    </div>




  )
};


export default ModalsDeleteEvent;
