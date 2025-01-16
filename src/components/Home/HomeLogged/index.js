import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import './style.scss';

import profil from 'src/assets/icon/profil.PNG';
import alerte from 'src/assets/icon/alerte.PNG';
import evenement from 'src/assets/icon/evenement.PNG';
import lieucanins from 'src/assets/icon/lieucanins.PNG';

import Map from 'src/components/Home/HomeLogged/map';
import { NavLink } from 'react-router-dom';

const HomeLogged = ({ users }) => {


  console.log(users);
  return (
    <div className="homelogged">

      <Header />

      {/* <div> 
        <div> 
        <p> un peu de blabla</p>
        puis une image
        </div>
      </div> */}
      <div >
        <p className="title-strong"> Recherchez </p>
      </div>

      <div className="cards is-flex is-justify-content-space-evenly is-flex-wrap-nowrap">

        {/* Button profil */}
        <a className="hover-search">
          <div className="is-flex is-align-items-center opacity-construction">
            <figure className="image is-128x128">
              <img className="border-pic" src={profil} alt="Profil" />
            </figure>
            <p className="title is-4 mx-2"> Profil</p>
          </div>
        </a>

        {/* Button Evenements */}
        <NavLink exact to="/events" className="hover-search">
          <div className="is-flex is-align-items-center opacity-construction">
            <figure className="image is-128x128">
              <img className="border-pic" src={evenement} alt="evenement" />
            </figure>
            <p className="title is-4 mx-2">Evenements</p>
          </div>
        </NavLink>

        {/* Button Lieux canins */}
        <a className="hover-search">
          <div className="is-flex is-align-items-center opacity-construction">
            <figure className="image is-128x128">
              <img className="border-pic" src={lieucanins} alt="Lieux canins" />
            </figure>
            <p className="title is-4 mx-2">Lieux <br /> Canins</p>
          </div>
        </a>

        {/* Button Alertes */}
        <a className="hover-search">
          <div className="is-flex is-align-items-center opacity-construction">
            <figure className="image is-128x128">
              <img className="border-pic" src={alerte} alt="alerte" />
            </figure>
            <p className="title is-4 mx-2">Alertes</p>
          </div>
        </a>

      </div>


      {/* SearchBar */}
      {/* <div className="field has-addons">
        <div className="control">
          <a>
            <i class="fas fa-search"></i>
          </a>

          <input className="input" type="text" placeholder="Recherchez par ville" />
        </div>
        <div className="control">

        </div>
      </div> */}


      {/* Regardez autour de vous */}
      <div> 

      <div className="around__us is-flex is-justify-content-space-between">
       
        <div className="look__around">
          <p className="title__look-around font-text">Regardez autour de vous</p>
          <Map />
        </div>
        

        <div className="discover">
          <p className="title__discover font-text">Découvrez les autres chiens</p>
          <div className="list__dog">

            {users.map((searchedUserObject) => {
              return (
                <NavLink key={searchedUserObject.dog_id} className="text-link" to={`/users/${searchedUserObject.user_id}`}>
                  <img className="image is-128x128 picture__size" src={searchedUserObject.profile_pic} />
                </NavLink>
              )
            })
            }
          </div>
        </div>


      </div>
      </div>
      
    </div>
  )
};


export default HomeLogged;
