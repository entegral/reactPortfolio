import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import FooterBar from './FooterBar';

function App() {


  return (  
    <div>

      <style jsx global>{`
        body {
          background-color: lightslategray;
        }
      `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <FooterBar/>
      
    </div>
  );
}

export default App;
