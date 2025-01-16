import React from 'react';
import PropTypes from 'prop-types';
import raichupic from 'src/assets/raichupic.jpg';
import './style.scss';


const ModalsDog = ({
    ModalAddingDog,
    name,
    race,
    dog_gender,
    profile_pic,
    handleChangeDogProfil,
    birthday,
    description,
    handleClickDogProfil,
    activeFetchDogInfo,
    dog_id
}) => {
console.log("COMPONENT MODALS DOG = dog id ", dog_id);
  // useEffect(() => {
  //   activeFetchDogInfo()
  // }, []);

  return (
    <div className="modal is-active">
      <div className="modal-background"> </div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title centerTitle">Ajouter un chien</p>
          <button onClick={ModalAddingDog} className="delete" aria-label="close"></button>
        </header>
        <div className="modal-content">
          <div className="box">
            <form className="form-size">
              <div className="is-dog-presentation-div is-flex is-flex-direction-row">
                {/* <img className="image hasDog is-128x128" src={raichupic} /> */}


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
                  <button type="submit" onClick={handleClickDogProfil} className="button is-small is-primary mb-2">Valider</button>
                  <button onClick={ModalAddingDog} className="button is-small is-light">Annuler</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </div >

  )
};

ModalsDog.proptypes = {

};
export default ModalsDog;
