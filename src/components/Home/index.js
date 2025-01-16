import React from 'react';
import PropTypes from 'prop-types';
import HomeNotLogged from 'src/components/Home/HomeNotLogged';
import HomeLogged from 'src/containers/HomeLogged';
import Footer from 'src/components/Footer';
import './style.scss';


const Home = ({ user_id}) => {
  return (
  <div className="home is-flex is-flex-direction-column is-justify-content-space-between">

  { user_id ? <HomeLogged /> : <HomeNotLogged />}
  <Footer />
  </div>

)};

Home.proptypes = {
  
};

export default Home;
