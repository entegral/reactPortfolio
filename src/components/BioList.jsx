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
      float: 'left',
      width: '100%',
      borderRadius: '5px'
    };
    
    return(
      <div>
        
        <Row style={rowStyle}>
          
          <Col s={2} l={2} className='offset-s5 offset-l1'>
            <img style={imgStyle}  src={robertbruce} alt=""/>
          </Col>

          <Col s={10} l={8} className='offset-s1 '>
            <BioSection title={this.state.aboutMe.title} 
              text={this.state.aboutMe.text} />
          </Col>
          
        </Row>

        <Row>
          <Col s={10} l={10} className='offset-s1 offset-l1'>

            <PortfolioSection projectList={this.state.projects} />
          
          </Col>

        </Row>

      </div>

    );
  }
}

export default BioList;