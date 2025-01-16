import React, {useEffect}  from 'react';
import hidoggyLogo from 'src/assets/logo/Logo.png';
import ModalsInscription from 'src/containers/ModalsInscription';
import ModalsConnexion from 'src/containers/ModalsConnexion'
// import du style
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

const HeaderGuest = ({
  isInscriptionOpen,
  toggleInscription,
  isConnexionOpen,
  toggleConnexion,
  inscriptionOk,
}) => {

  return (

    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link exact="true" to="/">
          <img className="logo mt-2" src={hidoggyLogo} alt="HiDoggy logo" />
        </Link>

    {/* <div className=""> 
  
      <p className={`${inscriptionOk ? "show" : "hide"} mt-2`}> Votre inscription a bien été prise en compte. </p>
    </div> */}
        
        {/* voir pour faire fonctionner le menu "burger" sur mobile 
        https://stackoverflow.com/questions/55015841/burger-menu-using-bulma-on-react-not-working */}
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
              <button onClick={toggleConnexion} className="button mr-2 mt-1 has-text-white color-button ">Connexion</button>
              <button type="button" onClick={toggleInscription} className="button mr-2 mt-1 has-text-white color-button ">Inscription</button>

              {isInscriptionOpen && <ModalsInscription />}
              {isConnexionOpen && <ModalsConnexion />}

          </div>
        </div>
      </div>
    </nav >
  )
};


export default HeaderGuest;
