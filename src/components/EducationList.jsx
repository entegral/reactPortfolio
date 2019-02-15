import React from 'react';
import { Col, Collapsible, CollapsibleItem, Row, Collection } from 'react-materialize';



function EducationList() {

  const collectionStyle = {
    backgroundColor: 'teal',
    color: 'white'
  };

  const rowStyle = {
    marginTop: '50',
    
  };


  const collapsableItemStyle = {
    backgroundColor: 'white',
    margin: '20px 40px 0px 40px'
  };

  const liStyle = {
    fontWeight: 'bold',
    fontSize: '1.15em'
  }


  return(
    <div>
      <Row style={rowStyle}>
        <Col s={6} className='offset-s3'>

          <Collection header='Programming Education'>
          
            <Collapsible header='First Names' popout>
              <CollapsibleItem style={collapsableItemStyle}  header='Epicodus' icon='school'>
                <ul>
                  <li style={liStyle}>Oct 2018 to April 2019</li>
                  <li>Completed a full-time 6 month course, accruing over 800 hours of quality programming experience including extensive use of; React, Angular, Rails, Javascript, TDD, pair/mob programming, and collaborative group coordinated projects.</li>
                </ul>
              </CollapsibleItem>
              <CollapsibleItem style={collapsableItemStyle} header='Portland Community College' icon='school'>
                <ul>
                  <li style={liStyle}>Oct 2018 to April 2019</li>
                  <li>Excelled in CS160, CS161 and CS162 where I was introduced to programming fundamentals taught in CPP.</li>
                </ul>
              </CollapsibleItem>
            </Collapsible>

          </Collection>
        </Col>

      </Row>

      <Row style={rowStyle}>
        <Col s={6} className='offset-s3'>

          <Collection  header='Undergraduate Education'>
          
            <Collapsible header='First Names' popout>
              <CollapsibleItem style={collapsableItemStyle} header='University of Portland' icon='school'>
                Lorem ipsum dolor sit amet.
              </CollapsibleItem>
            </Collapsible>

          </Collection>


        </Col>
      </Row>
    </div>
  );
}

export default EducationList;