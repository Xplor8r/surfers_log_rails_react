import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import CountryLink from './linkToCountry'
import SurfSpotLink from './linkToSurfSpot'
import ModalForm from './modalForm'

const NavBarComponent = ({countries,surfSpots}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

  return (
    <Navbar sticky="top" style={{backgroundColor: "#7cbcc6"}} light expand="md">
      <NavbarBrand href="/">
        <Media src={surfLogo} height={60} alt="Surfers Log Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <ModalForm form={"Log In"}/>
          <ModalForm form={"Sign Up"}/>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Countries
            </DropdownToggle>           
            <DropdownMenu right>
              {countriesWithLogEntries.map((country) => (
                <CountryLink country={country} key={country.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Surf Spots
            </DropdownToggle>   
            <DropdownMenu right>
              {surfSpotsWithLogEntries.map((surfSpot) => (
                <SurfSpotLink surfSpot={surfSpot} key={surfSpot.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent