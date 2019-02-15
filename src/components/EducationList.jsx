import React from 'react';
import { Col, Collapsible, CollapsibleItem, Row, Collection } from 'react-materialize';



function EducationList() {

  const collapsableStyle = {
    backgroundColor: 'white'
  };


  return(
    <Row >
      <Col s={4} className='offset-s4'>

        <Collection header='In Class Experience'>
        

          <Collapsible header='First Names' popout defaultActiveKey={1}>
            <CollapsibleItem style={collapsableStyle}  header='Epicodus' icon='school'>
              <ul>
                <li></li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem style={collapsableStyle} header='Portland Community College' icon='school'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem style={collapsableStyle} header='University of Portland' icon='school'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>

        </Collection>
      </Col>
    </Row>
  );
}

export default EducationList;