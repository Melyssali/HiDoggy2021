 import React, { useEffect, useState } from 'react';

import { NavLink, Redirect } from 'react-router-dom';
import hidoggyLogo from '../../assets/logo/Logo.png';
// import { reduxForm } from 'redux-form';
// import validationConnexion from './validationConnexion';

import HomeLogged from 'src/components/Home/HomeLogged';
import './styles.scss';


// LA PAGE CONNEXION  (DEMANDE DE MAIL ET MOT DE PASSE)

const ModalsConnexion = ({
  toggleConnexion,
  email,
  password,
  changeField,
  handleLogin,
  handleError,
  isLogged,
  errormessage
}) => {

  useEffect(() => {
    console.log('isLogged : ', isLogged);
    //si isLogged, is False
    if(isLogged ) {
      // const history = useHistory();
      // history.push("http://localhost:8080/user");
      return <Redirect to="/" />
    } 
  }, [isLogged])


  // const [errors, setErrors] = useState({});

  // const handleConnexionSubmit = (e) => {
  //   e.preventDefault()
  //   setErrors(validation(email, password))
  // }
  //  const handleFormSubmit = (e) => {
  //   e.preventDefault()
  // }

  // if(email && password) {
  //   return (
  //     <div> test

  //     </div>
  //   )

  // }
  // submit logged = redirect to Home component
  return (


    <div className="modal is-active">
      <div className="modal-background"> </div>
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title centerTitle">Connexion</div>
          <button onClick={toggleConnexion} className="delete" aria-label="close"></button>
        </header>
        <div className="modal-content">
          <div className="box">
            <span className="columns is-centered has-text-weight-semibold is-size-4"> Bienvenue sur
                  <img className="logo" src={hidoggyLogo} alt="HiDoggy logo" />
            </span>
            <form >

              {/* {errors.email && <p className="error"> {errors.email} </p>} */}
              {/* <div className=" error"> Email ou Mot de passe incorrect, veuillez les ressaisir</div> */}

              <div className="control has-icons-left has-icons-right">
                <input onChange={changeField}
                  className="input is-large is-hovered" name="email" value={email} type="email"
                  placeholder="Email" required="required"
                />
                <span className="icon is-normal is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <div className="field">
                {/* {errors.password && <p className="error"> {errors.password} </p>} */}
                <div className="control has-icons-left is-flex is-justify-content-center is-align-items-center ">
                  <input onChange={changeField} name="password" value={password} className="input is-large is-hovered" type="password" placeholder="Mot De Passe" required="required" />
                  <span className="icon is-left">
                    <i className="fas fa-lock"></i>
                  </span>

                </div>
                <div className={errormessage ? "error" : "error-none"}> Email ou Mot de passe incorrect, veuillez les ressaisir</div>
                <input type="submit" onClick={handleLogin} className="button is-fullwidth mt-5 is-primary is-medium" value="Se connecter" />
                  {/* onChange={handleError}  */}

           
                <button className="button forgot-password-link mt-5 is-underlined is-size-6 "> Mot de passe oublié ? </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
};


export default ModalsConnexion;
