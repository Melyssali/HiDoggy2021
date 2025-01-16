import React from 'react';
// import axios from 'axios';

import './styles.scss';

// FILTRER SUR LA VILLE, LA RACE DE CHIEN, LE SEXE DE L'ANIMAL

const Select = ({ changeFilterSearch }) => {

  return (
    <main>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="is-flex is-justify-content-space-evenly field mt-3">
        <div className="control has-icons-left ">
          <div className="select">
            <select name="city" onChange={changeFilterSearch}>
              <option value="" select="true">Villes</option>
              {/* <option >{city} </option> */}
              <option value="Brest"> Brest </option>
              <option value="Paris"> Paris </option>
              <option value="Lille"> Lille </option>
              <option value="Strasbourg"> Strasbourg </option>
              <option value="Angers"> Angers </option>
              <option value="Londres"> Londres </option>
              <option value="Argenton-sur-Creuse"> Argenton-sur-Creuse </option>
              
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-city"></i>
          </div>
        </div>

        <div className="control has-icons-left">
          <div className="select">
            <select name="race" onChange={changeFilterSearch}>
              <option value="" select="true">Race de Chiens</option>
              {/* <option > {race} </option> */}
              <option value="Shih Tzu"> Shih Tzu </option>
              <option value="Border Collie"> Border Collie </option>
              <option value="Epagneul Tibétain"> Epagneul Tibétain </option>
              <option value="Carlin"> Carlin </option>
              <option value="Torkshire Terrier"> Torkshire Terrier </option>
              <option value="Shiba inu"> Shiba inu </option>
              <option value="Berger Allemand"> Berger Allemand </option>
              <option value="Chihuahua"> Chihuahua </option>
              <option value="Rottweiler"> Rottweiler </option>
              <option value="Bulldog"> Bulldog </option>
              <option value="Border Terrier"> Border Terrier </option>
           
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-dog"></i>
          </div>
        </div>

        <div className="control has-icons-left">
          <div className="select">
            <select name="dog_gender" onChange={changeFilterSearch}>
              <option value="" select="true">Sexe </option>
              <option value="Male"> Male </option>
              <option value="Femelle"> Femelle </option>
            </select>
          </div>
          <div className="icon is-small is-left">
            <i  className="fas fa-venus-mars"></i>
          </div>
        </div>

      </div>
      {/* </form> */}
    </main>

  )
};



export default Select;
