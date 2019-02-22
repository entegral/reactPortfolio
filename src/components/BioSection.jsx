import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';


function BioSection ({ title, text }){

  const titleStyle = {
    marginTop: '-10px'
  };

  return(
    <Card className='blue-grey darken-1' textClassName='grey-text text-lighten-2'>
      <h4 style={titleStyle} className='card-title'>{ title }</h4>
      { text }
    </Card>

  );
}

BioSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BioSection;