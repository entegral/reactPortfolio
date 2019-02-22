import React from 'react';
import { Row, Col } from 'react-materialize';
import robertbruce from '../assets/images/robertbruce2.jpg';
import BioSection from './BioSection';
import bioData from '../assets/bioData';
import PortfolioSection from './PortfolioSection';

class BioList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      aboutMe: bioData.aboutMe,
      projects: bioData.projects
    };
  }
  
  
  render () {
    
    const rowStyle = {
      marginTop: '50px',
    };
  
    const imgStyle = {
      margin: '8px 25px 25px 5px',
      float: 'left',
      width: '100%',
      borderRadius: '5px'
    };
    
    return(
      <div>
        
        <Row style={rowStyle}>
          
          <Col s={6} l={2} className='offset-s3 offset-l1'>
            <img style={imgStyle} className='circle'  src={robertbruce} alt=""/>
          </Col>

          <Col s={6} l={8} className='offset-s3 '>
            <BioSection title={this.state.aboutMe.title} 
              text={this.state.aboutMe.text} />
          </Col>
          
        </Row>

        <Row>
          <Col s={6} l={10} className='offset-s3 offset-l1'>

            <PortfolioSection projectList={this.state.projects} />
          
          </Col>

        </Row>

      </div>

    );
  }
}

export default BioList;