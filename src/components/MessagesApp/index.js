import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Messages from './Messages';
import Footer from 'src/components/Footer';
import Inbox from 'src/containers/Inbox';


import './styles.scss';


const MessagesApp = () => (
  <div>
    <Header />
    <div className="is-flex is-justify-content-space-between">
      <Inbox />
      <Messages />
    </div>
    <Footer />
  </div>
);


export default MessagesApp;
