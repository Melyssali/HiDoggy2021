import React from 'react';
// import axios from 'axios';

import banpatte from 'src/assets/banpatte1.png';
import banpattegif from 'src/assets/banpatte.gif';

import './styles.scss';

// Introduction sur la page non loggué

const Introduction = () => {

  return (
    <div className="">
      <img src={banpattegif} alt="A random dog" className="image-size" />

      <div>
        <p className="font-text">
          Recherchez des Doggies autour de vous
        </p>
      </div>
    </div>



  )
};



export default Introduction;
