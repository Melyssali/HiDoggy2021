import React from 'react';
import PropTypes from 'prop-types';
import LeftProfil from 'src/containers/leftProfil';
import Footer from '../Footer';
import './style.scss';

{/* <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video> */}


const ProfilPage = () => {
  return (
    <div className="profilpage">
      <LeftProfil />
      <Footer />
    </div>

  );

};

ProfilPage.proptypes = {
  users: PropTypes.array.isRequired,
};

export default ProfilPage;
