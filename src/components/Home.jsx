import React from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';


function Home (){
  return(
    <Row>
      <Col s={2} className='grid-example'>

        <Collection>
          <CollectionItem><h4>About Me</h4></CollectionItem>
          <CollectionItem><h4>Portfolio Overview</h4></CollectionItem>
          <CollectionItem>A collection Panel that will display a list of items that will dynamically populate in the other column.</CollectionItem>
        </Collection>
      </Col>
      
      <Col s={10} className='grid-example'>
        2
      </Col>

    </Row>
  );
}

export default Home;