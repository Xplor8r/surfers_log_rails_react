import React, { Component }from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false
    };

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  handleClick = (e)=> {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  render() {
    let countriesWithLogEntries = this.props.countries.filter(a=>a.log_entries.length > 0);
    let surfSpotsWithLogEntries = this.props.surfSpots.filter(a=>a.log_entries.length > 0);
    return (
        <Navbar sticky="top" style={{backgroundColor: "#7cbcc6"}} light expand="md" className={this.state.scroll > this.state.top ? "fixed-nav": ""}>
          <NavbarBrand href="/" onClick={(e) => this.handleClick(e)}>
            <Media src={surfLogo} height={60} alt="Surfers Log Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Sign Up</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Countries
                </DropdownToggle>           
                <DropdownMenu right>
                  {countriesWithLogEntries.map((country) => (
                    <DropdownItem
                      key={country.id}
                      className="justify-content-center"
                    >
                      {country.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Surf Spots
                </DropdownToggle>
            
                <DropdownMenu right>
                  {surfSpotsWithLogEntries.map((surfSpot) => (
                    <DropdownItem
                      key={surfSpot.id}
                      className="justify-content-center"
                    >
                      {surfSpot.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavBarComponent