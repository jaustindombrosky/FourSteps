import React, { Component } from "react";
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class TopNav extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#" id="username_position">Username</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    
    <Nav pullRight>

      <NavItem eventKey={2} href="#" id ="logout_position" >
        Logout
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

 );
  }
}


  export default TopNav
