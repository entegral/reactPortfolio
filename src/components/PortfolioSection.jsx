import React from 'react';
import PropTypes from 'prop-types';
import { Collapsible, CollapsibleItem, Row } from 'react-materialize';

function PortfolioSection ({ projectList }){

  const componentStyle = {
  };

  const headerStyle = {
    marginTop: '100px',
    textAlign: 'center',
    
    color: '#d0d0d0'
  };

  const dropdownStyle = {
    marginTop: '25px'
  };

  return (
    <Row style={componentStyle}>
      <h4 className='card-title'
        style={headerStyle} >Portfolio Overview</h4>
      <Collapsible style={dropdownStyle} popout >
        {projectList.map((project, index)=>
          <CollapsibleItem className='white' header={project.title} icon={project.icon_code} key={index}>
            <p> {project.description} </p>
            <a href={project.link}>GitHub</a>
          </CollapsibleItem>
        )}
        
      </Collapsible>
    </Row>
  );
}

PortfolioSection.propTypes = {
  projectList: PropTypes.array
};

export default PortfolioSection;

