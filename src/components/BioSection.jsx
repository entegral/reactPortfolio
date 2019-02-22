import React from 'react';
import PropTypes from 'prop-types';


function BioSection ({ title, text }){

  const titleStyle = {
    color: '#d0d0d0'

  };

  const textStyle = {
    color: '#d0d0d0',
    marginTop: '25px',
    textAlign: 'justify',
    textJustify: 'inter-word'
  };

  return(
    <div>
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