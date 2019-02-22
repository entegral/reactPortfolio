import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { Collapsible } from 'react-materialize';

function PortfolioSection ({ projectList }){

  const headerStyle = {
    marginTop: '0px',
    color: '#d0d0d0'
  };

  const dropdownStyle = {
    marginTop: '25px'
  };

  return (
    <React.Fragment>
      <h4 className='card-title'
        style={headerStyle} >Portfolio Overview</h4>
      <Collapsible style={dropdownStyle} popout >
        {projectList.map((project)=>
          <Project title={project.title}
            description={project.description}
            link={project.link}
            iconCode={project.icon_code} />
        )}
      </Collapsible>
    </React.Fragment>
  );
}

PortfolioSection.propTypes = {
  projectList: PropTypes.array
};

export default PortfolioSection;

