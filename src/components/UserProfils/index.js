import React from 'react';
import PropTypes from 'prop-types';
import UserLeftProfils from 'src/containers/UserLeftProfils';
import Footer from '../Footer';


const UserProfils = () => {
  return (
    <div>
      
      <UserLeftProfils />
      {/* <Footer /> */}
    </div>

  );

};

UserProfils.proptypes = {
  users: PropTypes.array.isRequired,
};

export default UserProfils;
