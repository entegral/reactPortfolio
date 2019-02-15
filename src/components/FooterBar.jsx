import React from 'react';
import { Footer } from 'react-materialize';

function FooterBar(){

  const footerStyle = {
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%'
  };

  return (
    
    <Footer copyrights="© 2019 Copyright Robert Bruce"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      }
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/robb-b/">LinkedIn</a></li>
          <li><a className="grey-text text-lighten-3" href="https://github.com/entegral">Github</a></li>
        </ul>
      }
      className='teal page-footer'
      style={footerStyle}>
      
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>
  );
}

export default FooterBar;