import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import UserRightProfils from 'src/containers/UserRightProfils';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import raichupic from 'src/assets/raichupic.jpg';
import sophiepic from 'src/assets/sophiepic2.jpg';
import { useHistory } from 'react-router-dom';

import chienhome from 'src/assets/chienhome.jpg';
import adoption from 'src/assets/adoption.jpg';
import font2 from 'src/assets/font2.jpg';
import './style.scss';


const UserLeftProfils = ({
  userpresentation,
  activeFetchUsersInfo,
  userprofile_pic,
  handleAddFriend,
  activeFetchDogInfo,
  handleClickUser,
  handleClickDog,
  handleClickEvent,
  isPresentationActive,
  isDogPresentationActive,
  doglist,
  isEventActive,
  myEventsList,
  fetchParticipateListEvents,
  friendAdded,
  username

}) => {
  const history = useHistory();
  const historylocation = history.location.pathname.split("/users/")[1];

  useEffect(() => {
    activeFetchUsersInfo(historylocation)
  }, []);

  useEffect(() => {
    activeFetchDogInfo(historylocation)
  }, []);

  useEffect(() => {
    fetchParticipateListEvents(historylocation)
  }, []);



  return (
    <div className="">
      <Header />

      <div className="columns mt-5 ml-4 is-flex scroll">
        <div className="column is-two-thirds">
          {/* <p className="title__doggies ml-5 has-background-white is-justify-content-space-around">Coté gauche </p> */}

          <div className="" >
            <div className=" mt-4" >
              <div className="is-flex">

                {/* user picture profil  */}
                <div>
                  <figure className="image is-128x128 picSize ml-6 is-clickable">
                    {/* <img className="is-rounded " src={searchedUserObject.profile_pic} /> */}
                    <img className="is-rounded " src={userprofile_pic} />
                  </figure>
                </div>
                <div>
                    <p className="ml-3 mt-3"> {username} </p>
                </div>
                {/* Add to my doggies (favorites) */}
                <div>
                  <a className="level-item" aria-label="like">
                    <button className="faheartbutton" onClick={(e) => handleAddFriend(e, historylocation)}>
                      <span className="icon is-large">
                      <i class="fas fa-heart"></i>
                      </span>
                    </button>
                  </a>
                </div>

                <div className={`${friendAdded ? 'addToFavoris' : 'addToFavoris_hide'}`}>
                <p className="addToFavoris_text">profil ajouté à vos favoris</p>
              </div>

              </div>
              {/* 3 buttons nav : presentation, mon chien ou mes chiens, évènements */}
              <div className=" ">
                <button onClick={handleClickUser} className="button is-primary is-rounded ml-6 my-4 is-outlined"> Présentation </button>
                <button onClick={handleClickDog} className="button is-primary is-rounded is-outlined mx-4 my-4"> Chien(s) </button>
                <button onClick={handleClickEvent} className="button is-primary is-rounded is-outlined my-4"> Evènements </button>
              </div>

              {/* Description de l'user */}
              {isPresentationActive && (
                <div className="is-flex-direction-row">
                  <div className="is-flex ">
                    <i className="fa fa-edit is-flex is-justify-content-end is-align-content-end is-align-items-end"></i>
                  </div>
                  <div className="box has-text-justified">
                    <p> {userpresentation} </p>
                  </div>
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
                              <p><span className="span-color"><i class="fas fa-birthday-cake"></i></span>{dogObject.birthday.slice(0, 10).split('-').reverse()[0]}/{dogObject.birthday.slice(0, 10).split('-').reverse()[1]}/{dogObject.birthday.slice(0, 10).split('-').reverse()[2]}</p>
                              <p className="description-style"><span className="span-color description">Description: </span>{dogObject.description}</p>

                            </div>
                          </div>
                        </form>
                      )
                    })
                  }</>
              )}


              {/* Evenements*/}
              {isEventActive && (
                <div className="is-flex-direction-row">
                  Evenements à venir :
                  <div className="box">

                    {
                      myEventsList &&
                      myEventsList.map((myEventObject) => {
                        return (
                          <div>
                            <a>
                              <span>
                                <i className="fas fa-search mx-2"></i>
                              </span>
                            </a>
                        Participe à la balade du {myEventObject.date.slice(0, 10).split('-').reverse()[0]}/{myEventObject.date.slice(0, 10).split('-').reverse()[1]}/{myEventObject.date.slice(0, 10).split('-').reverse()[2]} à {myEventObject.city}
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
                  <div className="is-primary is-rounded ml-6 my-5"> Mes Photos/Vidéos
                      </div>
                </div>

                {/* Les photos et vidéos des chiens de l'utilisateur */}
                <div className="is-flex is-flex-wrap-wrap is-align-content-flex-start">
                <figure className="image image-size-home  ml-6">
                    <img className="border-pic-videos" src={chienhome} />
                  </figure>

                  <figure className="image image-size-home  ml-6">
                    <img className="border-pic-videos" src={font2} />
                  </figure>
                </div>
              </div>





             
            </div>
          </div>
        </div> 
        <UserRightProfils />
      </div>

    </div>







  );
}

UserLeftProfils.proptypes = {

};

export default UserLeftProfils;


