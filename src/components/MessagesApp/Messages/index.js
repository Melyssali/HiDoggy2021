import React from 'react';
import PropTypes from 'prop-types';
import Form from 'src/containers/FormChat';
import Content from 'src/containers/Content';
import './styles.scss';

const Messages = () => (
<div className="messages has-background-white is-flex is-flex-direction-column is-justify-content-space-between m-3 mr-5 mt-4 p-3">
<Content />
<Form />
</div> 

);


export default Messages;
