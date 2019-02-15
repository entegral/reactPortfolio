import React from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import robertbruce from '../assets/images/robertbruce.jpeg';

function Home (){

  const rowStyle = {
    marginTop: '50',
  };

  return(
    <div>

      <Row style={rowStyle}>
        
        <Col s={2} className='offset-s1'>
          <img className='circle' src={robertbruce} alt=""/>
        </Col>
        
        <Col s={8}>

          <Collection>
            <CollectionItem>
              <h4>About Me</h4>
            </CollectionItem>
            <CollectionItem>
              <p>Lorem ipsum dolor sit amet, facete appareat iracundia ut vim, ex dicit regione pro, reque vitae ei nec. Ei brute scripta per, an per verterem singulis accommodare. Timeam vulputate eam et. Repudiare instructior et vis, ad has agam admodum, no sea omnesque sensibus. At eloquentiam neglegentur sit, his et omnium delectus. An nobis audiam accusamus vim, eam in deleniti scaevola molestiae.

              Et nostro audiam mel, eos malis tation commune ei. Ei alterum mentitum eos, ea elit alterum scaevola ius. Tollit verterem abhorreant no eam, ferri aliquando referrentur ex qui. Sea ne ocurreret reprehendunt. Posse dictas interpretaris mel ex, vidit legimus cu his, dolorum accusam detraxit no mei. Mei augue scripta ea.

              Id dicit fabulas neglegentur sed. Euismod mnesarchum no vix, mei errem labitur adipiscing et. Eam sale commune no, sed ad augue causae. In nam dolores percipitur, an augue temporibus mel. Tation ridens meliore cum at, quo ex luptatum apeirian eleifend.

              Ne oblique virtute saperet his. Pro at recusabo petentium intellegam, vis no minim tractatos, ex veniam labores sensibus vis. Consul nusquam consectetuer sed ex, justo luptatum eu mel. No has sale integre, dicta voluptaria quo eu. Eu aperiam corpora mediocrem mel, ne ubique reprimique deterruisset sea, eu eos illud fabulas detracto.</p>
            </CollectionItem>
          </Collection>
        </Col>
        
      </Row>

      <Row>
        <Col s={10} className='offset-s1'>

          <Collection>
            <CollectionItem>
              <h4>Portfolio Overview</h4>
            </CollectionItem>
            <CollectionItem>
              <p>Lorem ipsum dolor sit amet, facete appareat iracundia ut vim, ex dicit regione pro, reque vitae ei nec. Ei brute scripta per, an per verterem singulis accommodare. Timeam vulputate eam et. Repudiare instructior et vis, ad has agam admodum, no sea omnesque sensibus. At eloquentiam neglegentur sit, his et omnium delectus. An nobis audiam accusamus vim, eam in deleniti scaevola molestiae.

              Et nostro audiam mel, eos malis tation commune ei. Ei alterum mentitum eos, ea elit alterum scaevola ius. Tollit verterem abhorreant no eam, ferri aliquando referrentur ex qui. Sea ne ocurreret reprehendunt. Posse dictas interpretaris mel ex, vidit legimus cu his, dolorum accusam detraxit no mei. Mei augue scripta ea.

              Id dicit fabulas neglegentur sed. Euismod mnesarchum no vix, mei errem labitur adipiscing et. Eam sale commune no, sed ad augue causae. In nam dolores percipitur, an augue temporibus mel. Tation ridens meliore cum at, quo ex luptatum apeirian eleifend.

              Ne oblique virtute saperet his. Pro at recusabo petentium intellegam, vis no minim tractatos, ex veniam labores sensibus vis. Consul nusquam consectetuer sed ex, justo luptatum eu mel. No has sale integre, dicta voluptaria quo eu. Eu aperiam corpora mediocrem mel, ne ubique reprimique deterruisset sea, eu eos illud fabulas detracto.</p>
            </CollectionItem>
          </Collection>
        </Col>

      </Row>

    </div>

  );
}

export default Home;