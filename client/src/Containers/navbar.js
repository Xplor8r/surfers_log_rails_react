import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
import CountryLink from '../Components/linkToCountry'
import SurfSpotLink from '../Components/linkToSurfSpot'
import SurferLink from '../Components/linkToSurfer'
import ModalForm from '../Components/modalForm'
import  { Link } from 'react-router-dom';

const NavBarComponent = ({countries, surfSpots, surfers}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const countriesWithLogEntries = countries.filter(a=>a.log_entries.length > 0);
  const surfSpotsWithLogEntries = surfSpots.filter(a=>a.log_entries.length > 0);
  console.log(surfers)
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
              Surfers
            </DropdownToggle>           
            <DropdownMenu right>
              {surfers.map((surfer) => (
                <SurferLink surfer={surfer} key={surfer.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Countries
            </DropdownToggle>           
            <DropdownMenu right>
              {countriesWithLogEntries.map((country) => (
                <CountryLink display={'country'} country={country} key={country.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Surf Spots
            </DropdownToggle>   
            <DropdownMenu right>
              {surfSpotsWithLogEntries.map((surfSpot) => (
                <SurfSpotLink display={'spot'} surfSpot={surfSpot} key={surfSpot.id}/>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent