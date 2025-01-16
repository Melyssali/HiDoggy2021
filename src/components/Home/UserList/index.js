import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const UserList = ({ 
  activeFetchUsers, 
  users, 
  selectedCity, 
  selectedRace, 
  selectedDog_gender,
  toggleConnexion,
  }) => {

  useEffect(() => {
    activeFetchUsers()
  }, []);
  //  let filteredUserCity = users.filter((user) => {
  //     return user.city
  //  })

  return (
    <div className="scroll-column mt-5 ml-4">
      <div className="columns">
        <div className="column">
          <p className="title__doggies ml-5 has-background-white">Les Doggies</p>
          <div className="columns">
            <div className="column">
              {
                // on utilise un filtre,  
                users.filter((user) => {
                  return (
                user.city.includes(selectedCity) && user.race.includes(selectedRace) && user.dog_gender.includes(selectedDog_gender)
                  );
                }).map((searchedUserObject) => {
                  return (
                    <Link onClick={toggleConnexion} key={searchedUserObject.dog_id} className="text-link" to="">
                      <div  className="user__list is-flex mt-4" >
                        <div>
                            {/* <img className="is-rounded " src={searchedUserObject.profile_pic} /> */}
                            <img className="image is-128x128 picSize ml-6" src={searchedUserObject.profile_pic} />
                        </div>
                        <div className="justify-content-center ml-2">
                          <p name="dogname" className="dog__name">  {searchedUserObject.dog_name}</p>
                          <p name="username"> <span className="informations__profil">Propriétaire</span> : {searchedUserObject.pseudo} </p>
                          <p name="city"> <span className="informations__profil">Ville:</span> {searchedUserObject.city} </p>
                          <p name="race"> <span className="informations__profil">Race:</span> {searchedUserObject.race} </p>
                          <p name="dog_gender"> <span className="informations__profil">Sexe :</span> {searchedUserObject.dog_gender} </p>
                        </div>
                      </div>
                    </Link>
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

UserList.proptypes = {
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  dog_gender: PropTypes.string.isRequired,
  dog_name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
  dog_id: PropTypes.number.isRequired,
    }),
  ),
};
export default UserList;
