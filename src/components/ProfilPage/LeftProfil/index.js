import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import RightProfil from 'src/containers/RightProfil';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalsDog from 'src/containers/ModalsDog';
import { useHistory } from 'react-router-dom';
import UserProfils from 'src/components/UserProfils';
import EditDogModal from 'src/containers/EditDogModal';
import ModalsDeleteEvent from 'src/containers/ModalsDeleteEvent';

import raichupic from 'src/assets/raichupic.jpg';
import raichu1 from 'src/assets/raichu/raichu1.jpg';
import raichu2 from 'src/assets/raichu/raichu2.jpg';
import raichu3 from 'src/assets/raichu/raichu3.jpg';
import raichu5 from 'src/assets/raichu/raichu5.jpg';
import raichu6 from 'src/assets/raichu/raichu6.jpg';
import raichu7 from 'src/assets/raichu/raichu7.jpg';
import raichu8 from 'src/assets/raichu/raichu8.jpg';
import raichu9 from 'src/assets/raichu/raichu9.jpg';
import raichu10 from 'src/assets/raichu/raichu10.jpg';
import raichu11 from 'src/assets/raichu/raichu11.jpg';

import raichu4 from 'src/assets/raichu/raichu4.jpg';
import raichu12 from 'src/assets/raichu/raichu12.jpg';
import raichu13 from 'src/assets/raichu/raichu13.jpg';
import raichu14 from 'src/assets/raichu/raichu14.jpg';
import raichu15 from 'src/assets/raichu/raichu15.jpg';
import raichu16 from 'src/assets/raichu/raichu16.jpg';
import raichu17 from 'src/assets/raichu/raichu17.jpg';
import raichu18 from 'src/assets/raichu/raichu18.jpg';
import raichu19 from 'src/assets/raichu/raichu19.jpg';
import raichu20 from 'src/assets/raichu/raichu20.jpg';

import sophiepic from 'src/assets/sophiepic2.jpg';
import chienhome from 'src/assets/chienhome.jpg';
import adoption from 'src/assets/adoption.jpg';
import font2 from 'src/assets/font2.jpg';

import './styles.scss';

const LeftProfil = ({
  userpresentation,
  activeFetchUsersInfo,
  handleChange,
  username,
  isEdited,
  handleClick,
  handleClickUser,
  handleClickDog,
  handleClickEvent,
  isPresentationActive,
  isDogPresentationActive,
  isEventActive,
  userprofile_pic,
  handleChangeDogProfil,
  handleClickDogProfil,
  ModalAddingDog,
  name,
  isModalDogOpen,
  doglist,
  user_id,
  activeFetchDogInfo,
  profile_pic,
  editDog,
  isEditDogModalOpen,
  myEventsList,
  toggleDeleteEvents,
  isDeleteEventModalOpen,
  race,
  birthday,
  description,
  isEditDog,
  isDeletedEvent,
  fetchParticipateListEvents,
  changeMessage,
  deletingDog,
  isDogDeleted,
  eventsList
}) => {
  console.log(myEventsList);
  const history = useHistory();
  const historylocation = history.location.pathname.split("/users/")[1];

  useEffect(() => {
    activeFetchUsersInfo(historylocation)
  }, []);

  useEffect(() => {
    activeFetchDogInfo(historylocation)
  }, [isEditDog, isDogDeleted]);

  useEffect(() => {
    fetchParticipateListEvents(historylocation)
  }, [isDeletedEvent, eventsList]);
  
  useEffect(() => {
    setTimeout(() => {
      changeMessage()
    },5000);
  },[isEdited]);
  
  console.log(historylocation, user_id)
  return (

    historylocation == user_id ? (
    <div className="leftprofil">
      <Header />

      <div className="columns mt-5 ml-4 is-flex scroll">
        <div className="column is-two-thirds">
          {/* <p className="title__doggies ml-5 has-background-white is-justify-content-space-around">Coté gauche </p> */}

          <div className="" >
            <div className=" mt-4" >
              <div className="is-flex">

                {/* user picture profil  */}
                <div>
                  <figure className="image is-128x128 picSize ml-6 is-clickable mb-3">
                    {/* <img className="is-rounded " src={searchedUserObject.profile_pic} /> */}
                    <img className="is-rounded " src={userprofile_pic} />
                  </figure>
                </div>

                {/* Add to my doggies (favorites) */}
                <div>
                    <p className="ml-3 mt-3"> {username} </p>
                </div>

              </div>
              {/* 3 buttons nav : presentation, mon chien ou mes chiens, évènements */}
              <div className=" ">
                <button onClick={handleClickUser} className=" button is-primary ml-6 my-4 is-outlined"> Présentation </button>
                <button onClick={handleClickDog} className=" button is-primary is-outlined mx-4 my-4"> Chien(s) </button>
                <button onClick={handleClickEvent} className=" button is-primary is-outlined my-4"> Evènements </button>
              </div>

              {/* Description de l'user */}
              {isPresentationActive && (
                <div className="is-flex-direction-row">
                  <div className="is-flex ">
                    <i className="fa fa-edit is-flex is-justify-content-end is-align-content-end is-align-items-end"></i>
                  </div>
                  <textarea
                    
                    className="box inputs input-textarea"
                    type="textarea"
                    name="userpresentation"
                    placeholder="Description"
                    value={userpresentation}
                    onChange={handleChange} />
                </div>
              )}

              {/* Description du chien */}
              {isDogPresentationActive && (
                <>

                  {
                    doglist && doglist.map((dogObject) => {
                      return (

                        <form key={dogObject.dog_id}>
                          <div className="is-dog-presentation-div mb-3 is-flex is-justify-content-space-between">
                            <img className="image hasDog is-128x128 mt-4" src={dogObject.profile_pic} />

                            <div className="inputs-profil is-flex is-flex-direction-column">

                              <p className="dog-name">{dogObject.name}</p>
                              <p><span className="span-color">Race: </span>{dogObject.race}</p>
                              <p><span className="span-color">Sexe: </span>{dogObject.dog_gender}</p>
                              <p><span className="span-color"><i className="fas fa-birthday-cake"></i></span>{dogObject.birthday.slice(0, 10).split('-').reverse()[0]}/{dogObject.birthday.slice(0, 10).split('-').reverse()[1]}/{dogObject.birthday.slice(0, 10).split('-').reverse()[2]} </p>
                              
                              <p className="description-style"><span className="span-color description">Description: </span>{dogObject.description}</p>
                             
                              
                            </div>
                            <div className="is-flex is-flex-direction-column ml-3">
                              <button onClick={(e) => editDog(e, dogObject.dog_id)} className="button is-small button-edit-color mb-2">Modifier</button>
                              <button onClick={(e) => deletingDog(e, dogObject.dog_id)} className="button is-small button-delete-color">Supprimer</button>
                            </div>

                          </div>
                        </form>
                      )
                    })
                  }

                  <button onClick={ModalAddingDog} className="button ml-6 is-small">Ajouter un nouveau chien</button>
                  {isModalDogOpen && <ModalsDog />}
                  {isEditDogModalOpen && < EditDogModal />}
                </>
              )}

              {/* Evenements*/}
              {isEventActive && (
                <div className="is-flex-direction-row">
                  Evenements à venir :
                  <div className="box">

                    {
                      myEventsList && myEventsList.map((myEventObject) => {
                        console.log('mes evenements auquel je vais participer => get avec axios : ', myEventsList);

                        return (
                          <div key={myEventObject.id}>
                            <a>
                              <span>
                                <i className="fas fa-search mx-2"></i>
                              </span>
                            </a>


                            Participe à la balade du {myEventObject.date} à {myEventObject.city}
                            {/* .slice(0, 10).split('-').reverse()[0]}/{myEventObject.date.slice(0, 10).split('-').reverse()[1]}/{myEventObject.date.slice(0, 10).split('-').reverse()[2]} */}
                            {/* Ouvrir la modale "Delete Events" en cliquant sur la corbeille */}
                            {isDeleteEventModalOpen && <ModalsDeleteEvent />}
                            
                            {/* Button bin */}
                            <button type="button" onClick={(e) => toggleDeleteEvents(e, myEventObject.id)} className="mb-6 button-trash fas fa-trash-alt mx-2">
                            </button>
                            
                          </div>
                        )

                      })
                    }

                  </div>


                </div>
              )}

              {/* Button "Mes photos/vidéos" */}
              <div className="">
                <div className="is-flex ">
                  <div className="title-profil"> Mes Photos/Vidéos
                </div>
                </div>

                {/* Les photos et vidéos des chiens de l'utilisateur */}
                <div className="is-flex is-flex-wrap-wrap scroll-pics">
                  <figure className="image image-size-home  ">
                    <img className="border-pic-videos" src={raichupic} />
                  </figure>

                  {/* <figure className="image image-size-home ">
                    <iframe className="has-ratio" width="128" height="128" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen></iframe>
                  </figure> */}

                  <figure className="image image-size-home  ">
                    <img className=" border-pic-videos " src={raichu1} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu2} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu12} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu4} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu5} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu6} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu7} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu8} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu9} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu10} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu11} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu13} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu14} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu15} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu16} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu16} />
                  </figure>


                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu18} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu19} />
                  </figure>

                  <figure className="image image-size-home ">
                    <img className=" border-pic-videos " src={raichu20} />
                  </figure>

              


                </div>
                
              </div>
              <p className={`${isEdited ? "nothide" : "hide"} `}> Vos modifications ont bien été prises en compte. </p>
              <div className="is-flex mt-4 is-justify-content-center">
                <button onClick={handleClick} type="submit" className="button-change-profil button is-primary is-small">Modifier le profil</button>
                <button className="button-delete-profil button is-danger is-small ml-2">Supprimer le profil</button>
              </div>

              
            

            </div>
          </div>
        </div>


        <RightProfil />
      </div>




      {/* <Footer /> */}
    </div>) : (<UserProfils />)


  );

};


LeftProfil.proptypes = {

};

export default LeftProfil;


