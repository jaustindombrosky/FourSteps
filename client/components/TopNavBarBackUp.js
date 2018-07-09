import React, { Component } from "react";
import {Navbar, MenuItem, NavItem, Nav, ButtonGroup, Button} from 'react-bootstrap'
// import FourStepsLogo from '../img/Logo1.png'

class TopNavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render() {

    return (
        <Navbar fixedTop fluid={true} className="top-nav-bar-container" >
            <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">
                        <div className="top-nav-logo-con">
                            <div className="top-nav-bar-logo" />
                        </div>
                    </a>
                    </Navbar.Brand>
            </Navbar.Header>

            <Nav pullRight>
                <NavItem className="top-nav-bar-item" eventKey={1} href="#">
                    Home
                </NavItem>
                <NavItem className="top-nav-bar-item" eventKey={2} href="#">
                    The Four Steps
                </NavItem>
                <NavItem className="top-nav-bar-item" eventKey={2} href="#">
                    FourSteps Education
                </NavItem>
                <NavItem className="top-nav-bar-item" eventKey={2} href="#">
                    Contact
                </NavItem>
                <NavItem className="top-nav-button-con">
                        <Button className="top-nav-btn">
                            Login
                        </Button>
                        <Button className="top-nav-btn">
                            Sign Up
                        </Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
  }
}



export default TopNavBar;