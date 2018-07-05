import React, { Component } from "react";
import {Navbar, MenuItem, NavItem, Nav, DropdownButton} from 'react-bootstrap'

class TopNavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
        username: 'landon'
    }
  }

  render() {
    let transformedUserName = this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1).toLowerCase();

    return (
        <Navbar fluid className="top-nav-bar-container" >
            <Navbar.Brand >
                <div className="#Brand">{transformedUserName}</div>
            </Navbar.Brand>
            <Nav pullRight>
                <NavItem >
                <DropdownButton noCaret  title="Menu">
                    <MenuItem eventKey="1">Settings</MenuItem>
                    <MenuItem eventKey="2">Log Out</MenuItem>
                </DropdownButton>
                </NavItem>
            </Nav>
        </Navbar>
    );
  }
}



export default TopNavBar;