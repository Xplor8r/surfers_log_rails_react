import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'

export default class Example extends React.Component {
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
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}