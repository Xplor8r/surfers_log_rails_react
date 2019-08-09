import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Media } from 'reactstrap';
import surfLogo from '../images/surfers_log_logo.jpg'
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    // this.handleScroll = this.handleScroll.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // handleScroll() {
  //   this.setState({scroll: window.scrollY});
  // }

  // componentDidMount() {
  //   const el = document.querySelector('nav');
  //   this.setState({top: el.offsetTop, height: el.offsetHeight});
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentDidUpdate() {
    // const app = document.getElementsByClassName('App');
    // this.state.scroll > this.state.top ? 
    //     app.style.paddingTop = `${this.state.height}px` :
    //     app.style.paddingTop = 0;
  // }
  render() {
    return (
        <Navbar color="light" light expand="md" className={this.state.scroll > this.state.top ? "fixed-nav": ""}>
          <NavbarBrand href="/">
            <Media src={surfLogo} height={60} alt="Surfers Log Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Link 2</NavLink>
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