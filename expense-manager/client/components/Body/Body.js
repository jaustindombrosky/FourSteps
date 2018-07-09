import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import SideBar from "../Body/Sidebar";
import TopNav from "../Body/TopNav";


// import Content from "./Content";

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div >

            <TopNav />
            <SideBar />

      </div>
    );
  }
}



export default Body;
