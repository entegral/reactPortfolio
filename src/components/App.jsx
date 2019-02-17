import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList';
import background from '../assets/images/ryan-moreno-99473-unsplash.jpg';

function App() {


  return (  
    <div>

      <style jsx global>{`
        body {
          background-image: url(${background});
          background-size: 100%;
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
        <Route exact path='/' component={Home} />
        <Route exact path='/education' component={EducationList} />
      </Switch>
            
    </div>
  );
}

export default App;
