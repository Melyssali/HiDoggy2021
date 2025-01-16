import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Content = ({list}) => (
<div className="content-scroll">
{
  list.map((messageObject) => (
  <div key={messageObject.id} className="message has-background-white">
    <div className="fa-portrait-color ">
      <i className="fas fa-portrait ml-1 fa-4x"/>
      <p className="message__content p-1 pl-3 pr-3 has-background-light ml-2"> {messageObject.content} </p>
    </div>
      <p className="message__author ml-1">{messageObject.pseudo}</p>
  </div>

  ))
}
  

</div>

);

Content.proptypes = {

};
export default Content;
