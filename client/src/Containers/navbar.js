import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import DynamicLink from '../Components/dynamicLink'
import ModalForm from '../Components/modalForm'
import  { Link } from 'react-router-dom';

const NavBarComponent = ({countries, surfSpots, surfers}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

  return (
    <Navbar sticky="top" style={{backgroundColor: "#7cbcc6"}} light expand="md">
      <Link
        className="navbar-brand"
        to={{
          pathname:'/',
          state: {}
        }}
        onClick={()=>window.scrollTo(0, 0)}
      >
        <Media src={surfLogo} height={60} alt="Surfers Log Logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <ModalForm form={"Log In"}/>
          <ModalForm form={"Sign Up"}/>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Surfers
            </DropdownToggle>           
            <DropdownMenu right>
              {surfers.map((surfer) => (
                <DynamicLink
                  display={'name'}
                  type={'surfer'}
                  prop={surfer}
                  key={surfer.id}
                />
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Countries
            </DropdownToggle>           
            <DropdownMenu right>
              {countriesWithLogEntries.map((country) => (
                <DynamicLink
                  display={'name'}
                  type={'country'}
                  prop={country}
                  key={country.id}
                />
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Surf Spots
            </DropdownToggle>   
            <DropdownMenu right>
              {surfSpotsWithLogEntries.map((surfSpot) => (
                <DynamicLink
                  display={'name'}
                  type={'surf-spot'}
                  prop={surfSpot}
                  key={surfSpot.id}
                />
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent