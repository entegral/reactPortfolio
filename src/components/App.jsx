import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import FooterBar from './FooterBar';

function App() {

  const footerStyle = {
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%'
  };

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
