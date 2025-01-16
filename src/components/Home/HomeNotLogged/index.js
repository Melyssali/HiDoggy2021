import React from 'react';
import PropTypes from 'prop-types';
import Select from 'src/containers/Select';
import UserList from 'src/containers/userList';
import UserMap from 'src/components/Home/UserMap';
import HeaderGuest from 'src/containers/HeaderGuest';
import Footer from 'src/components/Footer';
import Introduction from 'src/components/Home/Introduction';

import './style.scss';

const HomeNotLogged = () => (
<div className="homenotlogged is-flex is-flex-direction-column">
  <HeaderGuest />
  {/* <video id="background-video" loop autoPlay>
    <source src="https://player.vimeo.com/external/187296028.sd.mp4?s=5db76f38b88fe0639f6a6ed0197486261784b117&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
  
</video> */}
<Introduction />
  <Select />

  <div className="is-flex is-justify-content-space-between">
    <UserList />
    <UserMap />
  </div>
  
 
</div>
);

HomeNotLogged.proptypes = {

};
export default HomeNotLogged;
