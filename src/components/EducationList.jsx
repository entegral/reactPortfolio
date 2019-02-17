import React from 'react';
import { Col, Collapsible, CollapsibleItem, Row } from 'react-materialize';



function EducationList() {


  const rowStyle = {
    marginTop: '50px',
    
  };

  const collapsableItemStyle = {
    backgroundColor: 'white',
    margin: '20px 40px 0px 40px'
  };

  const liStyle = {
    fontWeight: 'bold',
    fontSize: '1.15em'
  };

  const headerStyle = {
    color: 'white'
  };

  const subStyle = {
    fontSize: '0.75em',
    color: 'grey',
    marginLeft: '15px',
    fontStyle: 'italic'
  };

  return(
    <div>
      <Row style={rowStyle}>
        <Col s={6} className='offset-s3'>

          <h4 style={headerStyle}>Industry Specific Education</h4>
          <Collapsible popout>
            <CollapsibleItem style={collapsableItemStyle}  header='Epicodus' icon='school'>
              <ul>
                <li style={liStyle}>Oct 2018 to April 2019</li>
                <li>Completed a full-time 6 month immersive course accruing over 800 hours of programming experience including extensive use of; React, Angular, Rails, Javascript, TDD, pair/mob programming, and collaborative group coordinated projects.</li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem style={collapsableItemStyle} header='Portland Community College' icon='school'>
              <ul>
                <li style={liStyle}>Jan 2017 to April 2017</li>
                <li>Excelled in CS160, CS161 and CS162 where I was introduced to programming fundamentals taught in CPP.</li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem style={collapsableItemStyle} header='Udacity' icon='cloud'>
              <ul>
                <li style={liStyle}>Jan 2016 to Jan 2017</li>
                <li>• Intro to Computer Science</li>
                <li>• How to use Git and GitHub</li>
                <li>• Intro to Relational Databases</li>
                <li>• Design of Computer Programs</li>
                <li>• Intro to jQuery</li>
                <li>• Front End Frameworks</li>
                <li>• Full Stack Foundations</li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem style={collapsableItemStyle} header='Codecademy' icon='cloud'>
              <ul>
                <li style={liStyle}>Nov 2015 to May 2016</li>
                <li>• Getting Started with Programming</li>
                <li>• Introduction to Javascript</li>
                <li>• Introduction to HTML</li>
                <li>• Introduction to CSS</li>
                <li>• Introduction to jQuery</li>
                <li>• Introduction to Python</li>

                <li></li>
              </ul>
            </CollapsibleItem>
          </Collapsible>

        </Col>

      </Row>

      <Row style={rowStyle}>
        <Col s={6} className='offset-s3'>

          <h4 style={headerStyle}>Undergraduate Education</h4>
            
          <Collapsible popout>
            <CollapsibleItem style={collapsableItemStyle} header='University of Portland' icon='school'>
              <h6 style={liStyle}>Aug 2006 to May 2010</h6>
              <p> B.S. of Chemistry. <br/> <span style={subStyle}> - American Chemical Society certified program</span> </p>
            </CollapsibleItem>
          </Collapsible>



        </Col>
      </Row>
    </div>
  );
}

export default EducationList;