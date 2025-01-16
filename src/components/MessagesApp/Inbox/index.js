import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import SearchMessage from 'src/containers/InboxSearchMessage';

const Inbox = ({message, inputSearch}) => {
  return (
<div className='inbox ml-5 m-3 p-5 mt-4 has-background-white'>
  <div className="inbox__title  mb-1 has-background-white">
    Messages
    <SearchMessage />
  </div>
 
  {
    message.filter((messageObject) => {
      return (
        messageObject.content.toLowerCase().includes(inputSearch)
      );}).map(({user, content}) => {
      return (
    <div className="messages__users is-flex mt-4">
      <div className="is-flex is-flex-direction-column">
        <i className="fas fa-portrait fa-3x"/>
        <p className="name__message">{user}</p>
      </div>
      <p className="message__users__content mt-3 ml-1">{content}</p>
    </div>   
      )
    })
  }
        
</div>

  )};

Inbox.proptypes = {

};
export default Inbox;
