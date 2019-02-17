import React from 'react';
import { Footer } from 'react-materialize';

function FooterBar(){

  const footerStyle = {
    fontSize: '0.85em'
  };

  return (
    
    <Footer copyrights="© 2019 Copyright Robert Bruce"
      moreLinks={
        <a className="grey-text text-lighten-2 right" href="#!">More Links</a>
      }
      links={
        <ul>
          <li><a className="grey-text text-lighten-2" href="https://www.linkedin.com/in/robb-b/">LinkedIn</a></li>
          <li><a className="grey-text text-lighten-2" href="https://github.com/entegral">Github</a></li>
        </ul>
      }
      className='teal darken-3 page-footer'
      style={footerStyle}>
      
      <p className="grey-text text-lighten-2">Thank you for visiting my portfolio page.</p>
      <p className="grey-text text-lighten-2">Please check out my LinkedIn and GitHub links for more detailed information about my career qualifications and source code.</p>
      <p className="grey-text text-lighten-2" >Background Photo by Ryan Moreno on Unsplash</p>
    </Footer>
  );
}

export default FooterBar;