import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

function Header(){
  
  const navbarStyle = {
    padding: '0px 20px 0px 20px'
  };

  return (
    <Navbar style ={navbarStyle} brand='Robert Bruce' className='teal' right>
      <NavItem href='/'> Home </NavItem>
      <NavItem href='/education'>Education</NavItem>
      <NavItem href='/work_experience'>Work Experience</NavItem>
    </Navbar>
  );
}

export default Header;