import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import CountryLink from '../Components/linkToCountry'
import SurfSpotLink from '../Components/linkToSurfSpot'
import ModalForm from '../Components/modalForm'
import  { Link } from 'react-router-dom';

const NavBarComponent = ({countries,surfSpots}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);

  return (
    <Navbar sticky="top" style={{backgroundColor: "#7cbcc6"}} light expand="md">
      <Link className="navbar-brand" to={'/'} onClick={()=>window.scrollTo(0, 0)}>
          <Media src={surfLogo} height={60} alt="Surfers Log Logo" />
      </Link>
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
                <CountryLink display={'nav'} country={country} key={country.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Surf Spots
            </DropdownToggle>   
            <DropdownMenu right>
              {surfSpotsWithLogEntries.map((surfSpot) => (
                <SurfSpotLink display={'nav'} surfSpot={surfSpot} key={surfSpot.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent