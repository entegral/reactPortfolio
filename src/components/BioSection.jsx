import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';


function BioSection ({ title, text }){

  return(
    <Card className='blue-grey darken-1' textClassName='grey-text text-lighten-2'>
      <h4 className='card-title'>{ title }</h4>
      { text }
    </Card>

  );
}

BioSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BioSection;