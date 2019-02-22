import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';


function BioSection ({ title, text }){

  const componentStyle = {
    marginLeft: '15px'
  };

  const titleStyle = {
    color: '#d0d0d0'

  };

  const textStyle = {
    color: '#d0d0d0'
  };

  return(
    <div style={componentStyle}>
      <h4 style={titleStyle} className='card-title'>{ title }</h4>
      <div className='transparent' style={textStyle}>
        { text }
      </div>
    </div>
  );
}

BioSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BioSection;