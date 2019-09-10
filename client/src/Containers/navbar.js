import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import NavBarItem from '../Components/navBarItem'
import ModalForm from '../Components/modalForm'
import  { Link } from 'react-router-dom';

const NavBarComponent = ({countries, surfSpots, surfers}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

  return (
    <Navbar sticky="top" style={{top: '-1px', backgroundColor: "#7cbcc6"}} light expand="md">
      <Link
        className="navbar-brand"
        to={{
          pathname:'/',
          state: {
            type: 'all'
          }
        }}
        onClick={()=>window.scrollTo(0, 0)}
      >
        <Media src={surfLogo} className="logo" alt="Surfers Log Logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <ModalForm form={"Log In"}/>
          <ModalForm form={"Sign Up"}/>

          <NavBarItem type={'surfer'} list={surfers} />
          <NavBarItem type={'country'} list={countriesWithLogEntries} />
          <NavBarItem type={'surf-spot'} list={surfSpotsWithLogEntries} />
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent