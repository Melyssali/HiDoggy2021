import React from 'react';
import hidoggyLogo from 'src/assets/logo/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import ModalsEvent from 'src/containers/ModalsEvent'
import PropTypes from 'prop-types';

// import du style
import './styles.scss';

const Header = ({
  handleLogout,
  loggedMessage,
  isEventOpen,
  toggleEvents,
  user_id,
  isActive,
  ChangeisActive,
  
}) => {


  return (

    <nav className="navbar center" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link exact="true" to="/">
          <img className="logo mt-2" src={hidoggyLogo} alt="HiDoggy logo" />
        </Link>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <p className="mt-2 mr-2">{loggedMessage}</p>
           
            <button type="button" onClick={toggleEvents} className="fas fa-plus-circle mt-2 mr-2 changecolor" > </button>
            
            {isEventOpen && <ModalsEvent />}

            <NavLink exact to="/events" activeClassName="nav-active" >
              <i className="fas fa-book-open mt-3 mr-4  
            has-text-grey"></i>
            </NavLink>


            <NavLink exact to="/messages" activeClassName="nav-active" style={{ color: '#4A4A4A' }} >
              <i className="fas fa-envelope mt-3 mr-4 has-text-grey "></i>
            </NavLink>

            {/* <nav aria-label="dropdown navigation"> */}
            <div className={`dropdown is-right ${isActive ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button onClick={ChangeisActive} className="button is-rounded mr-2 mt-2 has-text-black"
                  aria-haspopup="true" aria-controls="dropdown-menu6" >
                  <span>
                    <i className="fas fa-bars mr-2 has-text-grey" aria-hidden="true" />
                    <i className="fas fa-user-circle has-text-grey" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">

                  <NavLink onClick={ChangeisActive} className="dropdown-item " exact to={`/users/${user_id}`} activeClassName="nav-active">
                    Mon profil
                  </NavLink>
                  <NavLink onClick={handleLogout} className="dropdown-item " exact to="/" activeClassName="nav-active">
                    Deconnexion
                  </NavLink>
                </div>
              </div>
            </div >

          </div >
        </div>
      </div >
    </nav >




    /*  */


    /* LINK est une fausse deconnexion qui renvoi juste à la page d'accueil "non connectée".*/
    /* <Link exact to="/">
                  <button onClick={handleLogout} className="button is-small mr-2 mt-2 has-text-black ">deconnexion</button>
                  </Link> */


  )
};

Header.propTypes = {
  creator_id: PropTypes.string.isRequired,
};

export default Header;
