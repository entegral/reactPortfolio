import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

function Header(){
  
  const navbarStyle = {
    padding: '0px 20px 0px 20px',
  };

  const brandStyle = <span className='grey-text text-lighten-2'>Robert Bruce</span>;


  return (
    <Navbar style ={navbarStyle} brand={brandStyle} className='teal darken-3' right>
      <style jsx>{`

        .my-grey-text {
          color: #e0e0e0;
        }

        @media (max-width: 992px) {

          .my-grey-text {
              color:black;
          }

        }
      `}</style>
      <NavItem href='/#/'> <span className='my-grey-text'> Home </span> </NavItem>
      <NavItem href='/#/education'> <span className='my-grey-text'> Education </span></NavItem>
      <NavItem href='/#/work_experience'><span className='my-grey-text'> Work Experience </span></NavItem>
    </Navbar>
  );
}

export default Header;