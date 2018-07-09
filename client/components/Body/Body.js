import React, { Component } from "react";
import {ListGroup, ListGroupItem, Grid, Col, Row} from 'react-bootstrap'
import SideBar from "../Body/SideBar/SideBar";
import Content from "./Content";
import StrategyCheckList from '../StrategyCheckList/StrategyCheckList';


class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
        <div style={{display: 'flex'}}>   

          <SideBar />
          <Content />
          
        </div>

    );
  }
}



export default Body;