import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import robertbruce from '../assets/images/robertbruce2.jpg';
import BioSection from './BioSection';
import bioData from '../assets/bioData';

class BioList extends React.Component {

  constructor(props){
    super(props);
    console.log(bioData);
    this.state = {
      aboutMe: bioData.aboutMe,
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

            <Card className='blue-grey darken-1' textClassName='grey-text text-lighten-2' title=''>
              <h4 className='card-title'>Portfolio Piece</h4>

                Lorem ipsum dolor sit amet, facete appareat iracundia ut vim, ex dicit regione pro, reque vitae ei nec. Ei brute scripta per, an per verterem singulis accommodare. Timeam vulputate eam et. Repudiare instructior et vis, ad has agam admodum, no sea omnesque sensibus. At eloquentiam neglegentur sit, his et omnium delectus. An nobis audiam accusamus vim, eam in deleniti scaevola molestiae.

                Et nostro audiam mel, eos malis tation commune ei. Ei alterum mentitum eos, ea elit alterum scaevola ius. Tollit verterem abhorreant no eam, ferri aliquando referrentur ex qui. Sea ne ocurreret reprehendunt. Posse dictas interpretaris mel ex, vidit legimus cu his, dolorum accusam detraxit no mei. Mei augue scripta ea.

                Id dicit fabulas neglegentur sed. Euismod mnesarchum no vix, mei errem labitur adipiscing et. Eam sale commune no, sed ad augue causae. In nam dolores percipitur, an augue temporibus mel. Tation ridens meliore cum at, quo ex luptatum apeirian eleifend.

                Ne oblique virtute saperet his. Pro at recusabo petentium intellegam, vis no minim tractatos, ex veniam labores sensibus vis. Consul nusquam consectetuer sed ex, justo luptatum eu mel. No has sale integre, dicta voluptaria quo eu. Eu aperiam corpora mediocrem mel, ne ubique reprimique deterruisset sea, eu eos illud fabulas detracto.
            </Card>
          
          </Col>

        </Row>

      </div>

    );
  }
}

export default BioList;