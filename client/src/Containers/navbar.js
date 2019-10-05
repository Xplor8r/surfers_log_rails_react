import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import NavBarItem from '../Components/navBarItem'
import ModalForm from '../Components/modalForm'
import  { Link } from 'react-router-dom';

const NavBarComponent = ({countries, surfSpots, surfers, isMobile}) => {
  // use hooks for collapsable nav when isMobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // create lists of countries and surfSpots that have log_entries
  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

  return (
    <Navbar
      light
      expand="md"
      sticky="top"
      style={{top: '-1px', backgroundColor: "#7cbcc6"}}
    >
      <Link
        className="navbar-brand"
        to={{
          pathname:'/',
          state: {type: 'all'}
        }}
        onClick={isOpen && isMobile ? toggle: undefined}
      >
        <Media src={surfLogo} className="logo" alt="Surfers Log Logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <ModalForm form={"Log In"} navToggle={isMobile ? toggle: undefined} />
          <ModalForm form={"Sign Up"} navToggle={isMobile ? toggle: undefined} />

          <NavBarItem 
            type={'surfer'} 
            list={surfers}
            navToggle={isMobile ? toggle: undefined}
          />
          <NavBarItem
            type={'surf-spot'}
            list={surfSpotsWithLogEntries}
            navToggle={isMobile ? toggle: undefined}
          />
          <NavBarItem
            type={'country'}
            list={countriesWithLogEntries}
            navToggle={isMobile ? toggle: undefined}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent
