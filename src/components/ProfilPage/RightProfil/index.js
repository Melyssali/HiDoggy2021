import React, { useEffect } from 'react';
import './styles.scss';
import { useHistory, NavLink } from 'react-router-dom';

import sophiepic from 'src/assets/sophiepic2.jpg';

const RightProfil = ({
  userlanguages,
  usercity,
  userregistration_date,
  handleChange,
  activeFetchFriend,
  friendlist,
  deleteDoggies,
  isDeletedDoggie
}) => {
  useEffect(() => {

    activeFetchFriend()
  }, [isDeletedDoggie]);

  const history = useHistory();
  const historylocation = history.location.pathname.split("/users/")[1];

  return (
    <div className="column mgr-large">
      <div className="column is-flex ">
        {/* <p className="title__doggies ml-5 has-background-white">Coté droit  </p> */}
      </div>

      {/* Button "Mes Doggies" */}
      <div className="is-flex ">
        <div className="title-profil"> Mes Doggies favoris
          <a className="level-item" aria-label="like">
            <span className="ml-1 icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>

      {/* Friends list */}
      <div className="">
        {/* 1st box */}
        <div className="box ">
          {
            friendlist && friendlist.map((friendObject) => {

              return (
              <NavLink to={`/users/${friendObject.user_id}`}>
                <article className={`${friendObject.username === 'HiDoggyAdmin' ? 'hidden' : 'media'} `}>
                  <div className="media-left">
                    <figure className="image is-64x64 ml-6 is-clickable">
                      <img className="is-rounded " src={friendObject.userprofile_pic} />
                    </figure>
                  </div>
                  {/* Description of the friends : dogname, name */}
                  <div>
                    <div className="content friend-list-size">
                      <p className='dog__name'> {friendObject.username} - <small className="is-size-6">  {friendObject.usercity} </small>
                      </p>
                      <button type="button" onClick={(e) => deleteDoggies(e, friendObject.user_id)} className="mb-6 button-trash fas fa-trash-alt mx-2">
                      </ button>
                    </div>
                  </div>
                </article>
                </NavLink>
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

              <input
                className="inputs input-style is-primary is-light"
                name="userlanguages"
                placeholder="Langue parlée"
                value={userlanguages}
                onChange={handleChange} />


              <div className="is-flex ">
                <div className="title-profil"> Villes
                </div>
              </div>

              <input
                className="inputs input-style is-primary is-light"
                name="usercity"
                placeholder="Ville"
                value={usercity}
                onChange={handleChange} />


              <div className="is-flex ">
                <div className="title-profil"> Date d'inscription
                </div>
              </div>
              <span className="tag is-primary is-light"> {userregistration_date.slice(0, 10).split('-').reverse()[0]}/{userregistration_date.slice(0, 10).split('-').reverse()[1]}/{userregistration_date.slice(0, 10).split('-').reverse()[2]}</span>

              
            </div>
          </article>
        </div>



      </div>
    </div>

  );

};

export default RightProfil;
