import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

function Header(){
  
  const navbarStyle = {
    padding: '0px 20px 0px 20px',
    color: 'red'
  };

  const brandStyle = <span className='grey-text text-lighten-2'>Robert Bruce</span>;


  return (
    <Navbar style ={navbarStyle} brand={brandStyle} className='teal darken-3' right>
      <NavItem href='/#/'> <span className='grey-text text-lighten-2'> Home </span> </NavItem>
      <NavItem href='/#/education'> <span className='grey-text text-lighten-2'> Education </span></NavItem>
      <NavItem href='/#/work_experience'><span className='grey-text text-lighten-2'> Work Experience </span></NavItem>
    </Navbar>
  );
}

export default Header;