import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import SideBar from "../Body/Sidebar";
import Content from "./Content";

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
        <div className="body-container">
            <SideBar />
            <div className="section1"/>
            <div className="section2"/>
            <div className="section3"/>
            <div className="section4"/>
            <div className="section5"/>
        </div>
    );
  }
}



export default Body;