import React from 'react';
import { Col, Collapsible, CollapsibleItem, Row } from 'react-materialize';
import bioData  from '../assets/bioData';


class WorkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobList: bioData.workExperience
    };
  }
  

  render (){
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

    return(
      <Row style={rowStyle}>
        <Col s={12} m={10} l={8} className='offset-m1 offset-l2'>

          <h4 style={headerStyle}>Professional Experience</h4>
          <Collapsible popout>
            {this.state.jobList.map((job)=>
              <CollapsibleItem style={collapsableItemStyle} header={job.company + ' - ' + job.job_title}>
                <p style={liStyle}>{job.dates}</p>
                {job.details.map((detail)=>
                  <p>{detail}</p>
                )}
              </CollapsibleItem>
            )}

            
          </Collapsible>

        </Col>

      </Row>
    );
  }
}

export default WorkList;