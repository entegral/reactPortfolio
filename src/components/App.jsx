import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import FooterBar from './FooterBar';
import EducationList from './EducationList';
import background from '../assets/images/ryan-moreno-99473-unsplash.jpg';

function App() {


  return (  
    <div>

      <style jsx global>{`
        body {
          background-image: url(${background});
          background-size: 100%;
        }
      `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/education' component={EducationList} />
      </Switch>
      
      <FooterBar/>
      
    </div>
  );
}

export default App;
