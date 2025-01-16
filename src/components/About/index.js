import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Footer from 'src/components/Footer';

import sophiepic from 'src/assets/sophiepic2.jpg';
import stephanepic from 'src/assets/StephPic.PNG';
import melyssapic from 'src/assets/Melyssapic.PNG';
import hugopic from 'src/assets/Hugopic.PNG';
import hidoggyLogo from 'src/assets/logo/Logo.png';
import handtohand from 'src/assets/handtohand.jpg';


import './styles.scss';

const About = () => (
  
  <div className="about">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink exact="true" to="/">
          <img className="logo mt-2" src={hidoggyLogo} alt="HiDoggy logo" />
        </NavLink>
      </div>
    </nav>
    <div className="">
      {/* 1st box */}



      <div className="is-flex">
        <div className="container  is-flex is-justify-content-space-around">
          <div className="notification container_team is-primary is-size-2 font-text ">
            L'équipe  <strong>HiDoggy</strong>
          <div className="center-all mt-5">
            {/* Info concernant Melyssa */}
            <article className="media content_team">
              <div className="media-left">
                  <img className="image is-128x128 ml-5 is-clickable picture_team_size" src={melyssapic} />
              </div>

              <div>
                <div className="content ">
                  <p name="dogname" className="dog__name"> Melyssa <small className="is-size-6">  </small>
                  </p>
                  <p className="info"> Référente technique, Lead dev front</p>
                </div>
              </div>
            </article>

            {/* Info concernant Stéphane  */}
            <article className="media content_team">
              <div className="media-left">
                  <img className="image is-128x128 ml-5 is-clickable picture_team_size" src={stephanepic} />
              </div>

              <div>
                <div className="content ">
                  <p name="dogname" className="dog__name"> Stéphane <small className="is-size-6"> </small>
                  </p>
                  <p className="info"> Git Master, Lead dev Back </p>
                </div>
              </div>
            </article>

            {/* Info concernant Hugo  */}
            <article className="media content_team center">
              <div className="media-left">
                  <img className="image is-128x128 ml-5 is-clickable picture_team_size" src={hugopic} />
              </div>
              {/* Description of the friends : dogname, name */}
              <div>
                <div className="content ">
                  <p name="dogname" className="dog__name"> Hugo 
                  </p>
                  <p className="info"> Scrum Master, Developper back</p>
                </div>
              </div>
            </article>

            {/* Info concernant Sophie */}
            <article className="media content_team content_team">
              <div className="media-left">
                
                  <img className="image is-128x128 ml-5 is-clickable picture_team_size " src={sophiepic} />
              </div>
              <div>
                <div className="content ">
                  <p name="dogname" className="dog__name"> Sophie <small className="is-size-6">  </small>
                  </p>
                  <p className="info"> Product Owner, Developper front</p>
                </div>
              </div>
            </article>
          </div>
        </div>
          </div>

        {/*  */}


        <div className="box sizeBox is-flex" >
        <div className="discours"> 
              <p className="text-about"> Ce projet... </p> <br/> 
              <p className="small-text-about"> Nous y avons pris du plaisir, </p>
              <p className="small-text-about"> Nous avons fait de notre mieux, </p>
              <p className="small-text-about"> Nous nous sommes soutenus tout du long,</p>
              <p className="small-text-about"> Aujourd'hui, nous sommes encore plus heureux et fière,</p>
              <p className="small-text-about"> car nous avons appris, progressé et partagé de super moments ensemble. </p> 
              <br/>
              <p className="small-text-about"> Merci à toute la team O'clock, de nous avoir montré le chemin</p>
              <p className="small-text-about"> Merci à toute la team Sinbad, pour ces souvenirs et ce soutien mutuel. </p>
            </div> 

          <div className="container pic-position">
            <div className="pic-size"> 
            <img className="image-radius-all" src={handtohand} alt="main"  />
            </div>
          
            
            </div>
          </div>
          






            {/* / */}

          </div>
        </div>

        <Footer />
      </div>



);



About
  .proptypes = {

      };

export default About;

