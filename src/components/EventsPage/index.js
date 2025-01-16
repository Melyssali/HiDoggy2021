import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

// import { Link } from 'react-router-dom';
// import raichupic from 'src/assets/raichupic.jpg';
// import sophiepic from 'src/assets/sophiepic2.jpg';
import addPhoto from 'src/assets/Add_photo.PNG';

import "./styles.scss";

const EventsPage = ({

  eventsList,
  fetchEventsListAxios,
  handleParticipateEvent,
  changeCityFilter,
  selectedCityEvent,
  isCreated

}) => {

  useEffect(() => {
    fetchEventsListAxios()
  }, [isCreated]);

  

  return (
    <div className="card">
      <Header />
      <div className="card_content">

 <p className="font-size-events">Les évènements à venir : </p>
           
<div className="select_center">
    <select name="city" className="select select_center_position" onChange={changeCityFilter}>
       <option value="" select="true">Villes</option>
       <option value="Brest"> Brest </option>
       <option value="Paris"> Paris </option>
       <option value="Lille"> Lille </option>
       <option value="Strasbourg"> Strasbourg </option>
       <option value="Angers"> Angers </option>
       <option value="Londres"> Londres </option>
       <option value="Argenton-sur-Creuse"> Argenton-sur-Creuse </option>
     </select>
</div>   
         
          <div className="event_list_card is-flex is-flex-wrap-wrap is-justify-content-center">
{          
  eventsList &&  eventsList.filter((event) => {
              return event.city.includes(selectedCityEvent)
            }).map((eventObject) => {
                return (

                   <div className="event__list  mt-4" >
                      <div className="content_card ml-2">
                      {/* <img className="image " src={addPhoto} >
                      </img> */}
                      <div className="flex_pic_title">
                        <img name="event_pic" className="pic_size" src={eventObject.event_pic} />
                        <span name="name" className="event__name"> {eventObject.name}</span >
                      </div>
                        <p name="date" className="informations__event"> <span className="title__event"> Date de l'évènement</span> : {eventObject.date}</p> 
                        <p name="time" className="informations__event"> <span className="title__event">Heure :</span> {eventObject.time} </p>
                        <p name="adress" className="informations__event"> <span className="title__event">Adresse :</span> {eventObject.adress} </p>
                        <p name="city" className="informations__event"> <span className="title__event">Ville :</span> {eventObject.city} </p>
                        <p name="access_pmr" className="informations__event"> <span className="title__event">Accessibilité mobilité réduite :</span> {eventObject.access_pmr} </p>
                      <div>
                        <button type="button" onClick={(evt) => handleParticipateEvent(evt, eventObject.id)} className="button mt-1 is-primary is-small"> Je participe
                        </button>
                      </div>
                    </div>
                  </div>


                )
              })

              }

           </div>




          
           {/* .slice(0, 10).split('-').reverse()[0]}/{eventObject.date.slice(0, 10).split('-').reverse()[1]}/{eventObject.date.slice(0, 10).split('-').reverse()[2]} */}
        


       

      </div>
      <Footer />
    </div>


  );

};


EventsPage.proptypes = {

};

export default EventsPage;


