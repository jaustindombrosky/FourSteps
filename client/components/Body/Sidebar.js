import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
        <ListGroup className="sidebar" >
            <ListGroupItem>API</ListGroupItem>
            <ListGroupItem>Manual</ListGroupItem>
            <ListGroupItem>Questionnaire</ListGroupItem>
            <ListGroupItem>Financial Planner</ListGroupItem>
        </ListGroup>
    );
  }
}



export default SideBar;