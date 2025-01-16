import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SearchMessage = ({ inputSearch }) => (
<div>
 <input onChange={inputSearch} className="seachmessage p-1" placeholder="Rechercher un message" />
</div>
);

SearchMessage.proptypes = {

};
export default SearchMessage;
