import React , { useEffect } from 'react';
import PropTypes from 'prop-types';
import raichupic from 'src/assets/raichupic.jpg';

const EditDog = ({
  editDog,
  name,
  race,
  dog_gender,
  profile_pic,
  birthday,
  description,
  handleChangeDogProfil,
  handleClickDogProfil,

}) => {
 
  return (
    <>
    
    <div className="modal is-active">
    <div className="modal-background"> </div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title centerTitle">Modifier un chien</p>
        <button onClick={editDog} className="delete" aria-label="close"></button>
      </header>
      <div className="modal-content">
        <div className="box">
          <form className="form-size">
            <div className="is-dog-presentation-div is-flex is-flex-direction-row">


              <div className="inputs-profil is-flex is-flex-direction-column">

              <input
                    className="input-profil"
                    name="profile_pic"
                    placeholder="Url image"
                    value={profile_pic}
                    onChange={handleChangeDogProfil}
                  />

                <input
                  className="input-profil"
                  name="name"
                  placeholder="Nom du chien"
                  value={name}
                  onChange={handleChangeDogProfil}
                />

                <input
                  className="input-profil"
                  name="race"
                  placeholder="Race"
                  value={race}
                  onChange={handleChangeDogProfil}
                />
                <select
                  className="input-profil"
                  type=""
                  name="dog_gender"
                  onChange={handleChangeDogProfil} >
                  <option className="font-select" value={dog_gender} select="true"> Sexe </option>
                  <option value="Male"> Male </option>
                  <option value="Femelle"> Femelle </option>
                </select>
                <input
                  className="input-profil"
                  type="date"
                  name="birthday"
                  placeholder="Âge"
                  value={birthday}
                  onChange={handleChangeDogProfil}
                />
                <textarea
                  className="input-profil"
                  type="textarea"
                  name="description"
                  placeholder="Caractère"
                  value={description}
                  onChange={handleChangeDogProfil}
                />
              </div>
              <div className="is-flex is-flex-direction-column ml-3">
                <button type="submit" onClick={handleClickDogProfil} className="button mb-2 is-small is-primary mb-2">Valider</button>
                <button onClick={editDog} className="button is-small is-light">Annuler</button>
              </div>
              
            </div>
          </form>
        </div>

      </div>

    </div>

  </div >
  </>
)
};


EditDog.proptypes = {

};
export default EditDog;
