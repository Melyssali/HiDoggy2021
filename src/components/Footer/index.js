
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import About from 'src/components/About';

import './styles.scss';

const Footer = ({
  // openAbout,
}) => (

<footer className="footer_flex has-background-white">
  
    <div className="links ml-2 mt-3">
    <NavLink exact className="mr-4 ml-3" to="/about" activeClassName="nav-active">À propos</NavLink>
      <Router>
          <Link className="mr-4" to="/privacy">Confidentialité</Link>
          <Link className="mr-4" to="/terms">Conditions générales</Link>
          <Link className="mr-4" to="/sitemap">Plan du site</Link>
      </Router>
    </div>

      <div className='social-media mr-2'>
        <a className="button is-medium is-instagram is-inverted">
          <span className="icon">
            <i className="fab fa-instagram fa-lg"></i>
          </span>
        </a>
  
        <a className="button is-medium is-twitter is-inverted">
          <span className="icon">
            <i className="fab fa-twitter fa-lg"></i>
          </span>
        </a>
  
        <a className="button is-medium is-facebook is-inverted">
          <span className="icon">
            <i className="fab fa-facebook fa-lg"></i>
          </span>
        </a>
      </div>
  
</footer>
  
);



export default Footer;
