import React from 'react';
import PropTypes from 'prop-types';
import { CollapsibleItem } from 'react-materialize';

function Project({ title, description, link, iconCode }){

  return (
    <CollapsibleItem className='grey lighten-2' header={title} icon={iconCode}>
      <p> {description} </p>
      <a href={link}>GitHub</a>
    </CollapsibleItem>

    
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  iconCode: PropTypes.string
};

export default Project;

