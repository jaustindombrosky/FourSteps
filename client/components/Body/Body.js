import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import SideBar from "../Body/Sidebar";
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
        <div className="body-container">
          <StrategyCheckList />
            {/* <SideBar />
            <div className="section1"/>
            <div className="section2"/>
            <div className="section3"/>
            {/* <div className="section4">
               <DefensiveStrategies />
            </div>
            <div className="section5">
              <OffensiveStrategies />
            </div> */} 
            <div style={{display: 'flex'}}>
            </div>
        </div>
    );
  }
}



export default Body;