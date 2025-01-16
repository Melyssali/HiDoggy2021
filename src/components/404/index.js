import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderGuest from 'src/containers/HeaderGuest';
import Footer from 'src/components/Footer';

import hidoggyLogo from 'src/assets/logo/Logo.png';
import font1 from 'src/assets/font1.jpg';
import font2 from 'src/assets/font2.jpg';

import './styles.scss';

const PageError = ({

}) => {

  return (
    <div className="body-test">
    <div className="box box-info-test is-flex "> 

<div className="mainDivtest">
        {/* <img className="image-size" src={font2} alt="font d'écran" /> */}
        <div className="box-info">
          {/* <img src="https://random.dog/28882-14687-7949.jpg" alt="A random dog" className="image-size" /> */}
<div className="is-flex "> 
{/* <video className="background-video" id="background-video" loop autoPlay>
    <source src="https://player.vimeo.com/external/442634612.sd.mp4?s=1e93b251a44515575febab9f22fed31042049456&profile_id=139&oauth2_token_id=57447761 " type="video/mp4" />
  
</video> */}
</div>

          <div className="box-info-test taist">
            <h1 className="title is-1 ">
              PAGE 404
            </h1>
            <p className="subtitle is-1 has-text-black">
              Woof woof... euh oupsie. Mauvais chemin.
            </p>
            
            <p className="subtitle is-5">
              Si vous recherchez un chien à adopter, venez découvrir les chiens qui aimeraient trouver une nouvelle
              maison, cliquez ci-dessous :
            </p>

            <button className="button is-info">
              <a href="https://www.la-spa.fr/" className="a-test">Site de la SPA</a>
            </button>
            <br/>
            <br/>
            <p className="subtitle is-5 customClass">
              Si vous recherchez des amis pour votre chien, c'est par ici :
            </p>

            <button className="button is-primary">
              <Link exact="true" to="/">
                <img className="logo mt-2" src={hidoggyLogo} alt="HiDoggy logo" />
              </Link>
              {/* <a href="http://localhost:8080">HiDoggy.com</a> */}
            </button>
            <div className="pFooter-test ">
              <strong>(For info, the background picture comes from</strong>
              <a className="aFooter-test a-test is-justify-content-end" href="https://random.dog/"> random.dog</a>)
            </div>
          </div>
        </div>
      </div>


    </div>

      
    </div>

    //   <div>
    //     <img className="image-size" src={font2} alt="font d'écran" />
    //     <div className="box">
    //       Page 404
    //       Désolée, je crois que vous vous êtes trompés de chemin.
    //       Mais si vous recherchez un chien à adopter, venez découvrir les chiens qui aimeraient trouver une nouvelle maison
    // <button className="button is-primary">Primary</button>

    // Si vous recherchez des amis pour votre chien, c'est par ici

    // <button className="button is-primary">
    //         <Link exact="true" to="/">
    //           <img className="logo mt-2" src={hidoggyLogo} alt="HiDoggy logo" />
    //         </Link>
    //       </button>
    //     </div>

    //   </div>
  );
};



PageError
  .proptypes = {

};

export default PageError;

