import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './styles.scss';

import sophiepic from 'src/assets/sophiepic2.jpg';

const UserRightProfils = ({
  userlanguages,
  usercity,
  userregistration_date,
  activeFetchFriend,
  friendlist
}) => {
  const history = useHistory();
  const historylocation = history.location.pathname.split("/users/")[1];

  useEffect(() => {
    activeFetchFriend(historylocation)
  }, []);

  
  return (
    <div className="column mgr-large">
      <div className="column is-flex ">
        {/* <p className="title__doggies ml-5 has-background-white">Coté droit  </p> */}
      </div>

      {/* Button "Mes Doggies" */}
      <div className="is-flex ">
        <div className="title-profil"> Mes Doggies
          <a className="level-item" aria-label="like">
            <span className="ml-1 icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>

      {/* Friends list */}
      <div className="box ">
        {
          friendlist && friendlist.map((friendObject) => {
            return (
              <article className={`${friendObject.username === 'HiDoggyAdmin' ? 'hidden' : 'media'} `}>
                <div className="media-left">
                  <figure className="image is-64x64 ml-6 is-clickable">
                    <img className="is-rounded " src={friendObject.userprofile_pic} />
                  </figure>
                </div>
                {/* Description of the friends : dogname, name */}
                <div>
                  <div className="content">
                    <p name="dogname" className="dog__name"> {friendObject.username} - <small className="is-size-6">  {friendObject.usercity} </small>
                    </p>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>

      {/* 2 seconds box : Informations */}
      <div className="box ">
        <article className="media">
          <div className="media-left">
            <div className="is-flex ">
              <div className="title-profil"> Langue(s) parlée(s)
                </div>
            </div>
            <span className="tag is-primary is-light">{userlanguages}</span>


            <div className="is-flex ">
              <div className="title-profil"> Villes
                </div>
            </div>
            <span className="tag is-primary is-light">{usercity}</span>

            <div className="is-flex ">
              <div className="title-profil"> Date d'inscription
                </div>
            </div>
            <span className="tag is-primary is-light"> 
            {userregistration_date.slice(0, 10).split('-').reverse()[0]}/{userregistration_date.slice(0, 10).split('-').reverse()[1]}/{userregistration_date.slice(0, 10).split('-').reverse()[2]} 
            
            </span>

          </div>
        </article>
      </div>



    </div>


  );

};

export default UserRightProfils;
