import React, { Component } from "react";
import {ListGroup, ListGroupItem, SplitButton,MenuItem,ButtonToolbar,NavDropdown} from 'react-bootstrap'

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (

      <div className="sidenav">
<a href="#about">API</a>
<a href="#services">Manual</a>
<NavDropdown eventKey={3} title="Questionnaire" id="basic-nav-dropdown">
  <MenuItem eventKey={3.1}>Action</MenuItem>
  <MenuItem eventKey={3.2}>Another action</MenuItem>
  <MenuItem eventKey={3.3}>Something else here</MenuItem>
  <MenuItem divider />
  <MenuItem eventKey={3.3}>Separated link</MenuItem>
</NavDropdown>
<a href="#contact">AP</a>
</div>


    );
  }
}



export default SideBar;
