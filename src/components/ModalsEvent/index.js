import React, { useEffect }from 'react';
import hidoggyLogo from '../../assets/logo/Logo.png';
import raichuPic from '../../assets/raichupic.jpg';
import addPhoto from '../../assets/Add_photo.PNG';
import { NavLink, Redirect, useHistory } from 'react-router-dom';

import './styles.scss';

const ModalsEvent = ({
  name,
  time,
  date,
  adress,
  city,
  event_pic,
  access_pmr,
  toggleEvents,
  handleCreate,
  changeFieldEvent,
  picture,
  
}) => {
  const history = useHistory();

  const pushHistory = () => {
  history.push("/events")
  };

  return (

    <div className="modal is-active">
      <div className="modal-background"> </div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title centerTitle">Création d'un évènement</p>
          <button onClick={toggleEvents} className="delete" aria-label="close"></button>
        </header>
        <div className="modal-content">
          <div className="box">


            {/* <div className="logoCenter"> 
              <img className="image__center" width="100%" height="200" src={hidoggyLogo} alt="HiDoggy logo" />
              </div> */}

            <span className="columns span_size is-centered">
              <img className=" logo__event mb-3" src={hidoggyLogo} alt="HiDoggy logo" />
            </span>

            <form>
              <div className="field">

                <div className="is-flex columns is-centered is-justify-content-center">

                  {/* <img className="image" src={addPhoto} >
                  </img> */}
                </div>
                <div className="centerTitle mb-5">

                <input
                    className="input-profil"
                    name="event_pic"
                    placeholder="Url image event"
                    value={event_pic}
                    onChange={changeFieldEvent}
                  />
                  {/* <input accept="image/*" multiple type="file" /> */}

                </div>

                {/* Mettre une photo du lieu de l'évènement :  */}
                {/* <div className="is-flex ">
                <a className=" ">
                  <img className="" src={addPhoto} >
                  </img>
                </a>
              </div> */}

                {/* pour que l'utilisateur rajoute un fichier <input type="file" />  */}

                {/* Mettre la date de l'évènement */}
                <div className="control ">

                  <input
                    // <DatePicker
                    className="input is-large is-hovered mb-5"
                    name="name"
                    placeholder="NOM DE L'EVENEMENT"
                    value={name}
                    onChange={changeFieldEvent}
                    required={true}
                  />
                  <input
                    // <DatePicker
                    className="input is-large is-hovered"
                    name="date"
                    type="date"
                    placeholder="DATE DE LA BALADE"
                    value={date}
                    onChange={changeFieldEvent}
                    // selected={new Date()}
                    // minDate={new Date()}
                    required={true}
                  />
                </div>

                {/* Mettre l'heure de la balade */}
                <div className="control is-flex my-5">
                  {/* <label className="strong"> Heure : </label> */}
                  <input
                    className="input is-large is-hovered"
                    placeholder="HEURE DE LA BALADE"
                    type="time"
                    value={time}
                    onChange={changeFieldEvent}
                    name="time"
                    required={true} /> -
                {/* <input className="input is-large is-hovered" placeholder="HEURE DE LA BALADE" type="time" name="timeend" required={true} /> */}
                </div>

                {/* Mettre le lieu de la balade */}
                <div className="control">
                  <input
                    rows="2"
                    className="input is-large is-hovered dropdown"
                    placeholder="ADRESSE DE LA BALADE"
                    name="adress"
                    value={adress}
                    onChange={changeFieldEvent}
                    required={true} />

                </div>

                <div className="control">
                  <input
                    rows="2"
                    className="input is-large is-hovered dropdown mt-5"
                    placeholder="NOM DE LA VILLE"
                    name="city"
                    value={city}
                    onChange={changeFieldEvent}
                    required={true} />

                </div>

                <div className="control ">
                  <div className="borderAMR my-5 p-3">
                    <p className="is-size-4 "> ACCESSIBILITE A MOBILITE REDUITE :
                  </p>

                    <div className="is-flex ">
                      <div className="is-justify-content-space-evenly">
                        {/* Button yes */}
                        <label className="mr-2">
                          <input
                            type="radio"
                            className="mr-1"
                            name="access_pmr"
                            value="oui"
                            onChange={changeFieldEvent}
                          />
                          <p className="yesno" >Oui</p>
                        </label>

                        {/* Button No */}
                        <label>
                          <input
                            type="radio"
                            className=""
                            name="access_pmr"
                            value="non"
                            onChange={changeFieldEvent}
                          />
                          <p className="yesno"> Non </p>
                        </label>
                      </div>
                    </div>




                  </div>
                </div>


                <div className=" is-flex-direction-row">
                  <div className="">
                    <div className=" is-flex is-justify-content-space-evenly " >

                      <button type="button" onClick={() => handleCreate(pushHistory)} className="button mt-5 is-primary is-medium">Créer
                    </button>


                      <button type="button" onClick={toggleEvents} className="button mt-5 is-primary is-medium "> Annuler
                    </button>
                
                    </div>
                  </div>
                </div>



              </div>
            </form>
          </div>

        </div>

      </div>

    </div >


  )
};


export default ModalsEvent;
