import React from 'react';
import BioList from './BioList';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList';
import WorkList from './WorkList';
import background from '../assets/images/asfalt-light.png';

function App() {


  return (  
    <div>

      <style jsx global>{`
        body {
          background-image: url(${background});
          background-color: #222;
          background-size: 33%;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }
        main {
          flex: 1 0 auto;
        }
      `}
      </style>
      <Switch>
        <Route exact path='/' component={BioList} />
        <Route exact path='/education' component={EducationList} />
        <Route exact path='/work_experience' component={WorkList} />

      </Switch>
            
    </div>
  );
}

export default App;
