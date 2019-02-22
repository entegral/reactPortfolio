import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { Collapsible } from 'react-materialize';
import Card from 'react-materialize/lib/Card';

function PortfolioSection ({ projectList }){

  const headerStyle = {
    marginTop: '-10px'
  };

  const dropdownStyle = {
    marginTop: '25px'
  };

  return (

    <Card className='blue-grey darken-1' >
      <h4 className='card-title grey-text text-lighten-2'
        style={headerStyle} >Portfolio Overview</h4>
      <Collapsible style={dropdownStyle} popout >
        {projectList.map((project)=>
          <Project title={project.title}
            description={project.description}
            link={project.link}
            iconCode={project.icon_code} />
        )}
      </Collapsible>
    </Card>
  );
}

PortfolioSection.propTypes = {
  projectList: PropTypes.array
};

export default PortfolioSection;

