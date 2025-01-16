import React, {useState} from 'react';
import PropTypes from 'prop-types';
import hidoggyLogo from '../../assets/logo/Logo.png';
import validationInsciption from './validationInscription';
import './styles.scss';

// LA PAGE CONNEXION OU INSCRIPTION (DEMANDE DE MAIL)

const ModalsInscription = ({
  toggleInscription,
  username,
  userbirthdate,
  userpassword,
  changeFieldInscription,
  useremail,
  handleRegister,
  isRegister }) => {

    // useEffect(() => {
    //   console.log('isRegister : ', isRegister);
    //   //si isLogged, is False
    
    //   } 
    // }, [isRegister])
    // const [errors, setErrors] = useState({});

    // const handleFormSubmit = (e) => {
    //   e.preventDefault()
    //   setErrors(validation())
    // }

  return (
    <div className="modal is-active">
      <div className="modal-background"> </div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title centerTitle">Inscription</p>
          <button onClick={toggleInscription} className="delete" aria-label="close"></button>
        </header>
        <div className="modal-content">
          <div className="box">
            {/* Input NOM  */}
            <span className="columns is-vcentered is-centered">
              <img className="logo mb-3 " src={hidoggyLogo} alt="HiDoggy logo" />
            </span>
            <div className="field">
              <form >

                <div className="control has-icons-left has-icons-right">
                  {/* {errors.email && <p className="error"> {errors.email} </p>}
                  <label id="not-mail class" className="error">Email non valide</label> */}
                  <input
                    onChange={changeFieldInscription}
                    className="input is-large is-hovered" name="useremail" value={useremail} type="email"
                    placeholder="Email *"
                    // required={true} 
                    // validationError="Adresse mail non valide"
                    required
                  />
                  
                  <span className="icon is-normal is-left iconCenter">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>

                  
                </div>


                <div className="control">
                  {/* <label className="error"> Le Pseudo est déjà pris, veuillez en saisir un autre</label> */}
                  <input className="input is-large is-hovered " type="text" placeholder="Pseudo *" name="username" value={username}
                    // required={true} 
                    onChange={changeFieldInscription}
                    // validationError="Le pseudo existe déjà"
                    required />

                </div>

                {/* <p className="help is-danger">
                  Le pseudo ne doit pas être déjà pris par un autre utilisateur
                </p> */}


                <div className="control">
                  {/* <label className="error"> Vous êtes encore trop jeune, désolé</label> */}
                  <input
                    onChange={changeFieldInscription}
                    className="input is-large is-hovered mt-5"
                    type="date"
                    placeholder="Date de naissance *"
                    name="userbirthdate"
                    value={userbirthdate}
                    // validationError="Vous êtes trop jeune"
                    // required={true}
                    required
                  />
                </div>
                {/* <div className="help is-danger">
                  Vous devez avoir au moins 18 ans pour vous inscrire. Nous n'indiquerons pas la date de votre anniversaire aux autres utilisateurs HiDoggy
               </div> */}

                {/* <label className="error"> Le Mot de passe doit contenir 8 caractères dont 1 Majuscule, 1 chiffre et 1 caractère spéciaux</label> */}
                <div className="control has-icons-left is-flex is-justify-content-center is-align-items-center ">

                  <input
                    className="input is-large is-hovered "
                    type="password"
                    placeholder="Mot De Passe *"
                    name="userpassword"
                    value={userpassword}
                    // required={true}
                    onChange={changeFieldInscription}
                    minLength="8"
                    // validationError="Votre mot de passe doit contenir 8 caractères dont 1 majuscule, 1 caractère spéciaux, et 1 chiffre"
                    required />

                  <span className="icon is-left">
                    <i className="fas fa-lock"></i>
                  </span>

                  <div className="box">

                    <div>

                      <button type="button" className="is-right ">Afficher</button>
                    </div>
                  </div>
                </div>
                <button onClick={handleRegister} type="submit" className="button is-fullwidth mt-5 is-primary is-medium">Valider </button>

              </form>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
};

ModalsInscription.proptypes = {
  username: PropTypes.string.isRequired,
  userbirthdate: PropTypes.string.isRequired,
  userpassword: PropTypes.string.isRequired,
  useremail: PropTypes.string.isRequired,
  toggleInscription: PropTypes.func.isRequired,
  changeFieldInscription: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default ModalsInscription;
