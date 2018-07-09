import React, { Component } from "react";
import {ListGroup, ListGroupItem, MenuItem, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./sidebar.css"
import history from '../../../history';

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      manualMenuOpen: false
    }
    this.toggleManualMenu = this.toggleManualMenu.bind(this)
  }

  toggleManualMenu(){
    this.setState({
      manualMenuOpen: !this.state.manualMenuOpen
    })
  }

  render() {
    const hideChildrenStyle = {
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      opacity: 0
    }

    const showChildrenStyle = {
      display: 'block',
      transition: '0.2s ease-in',
      position: 'relative',
      zIndex: 0,
      opacity: 1
    }

    const arrowFaceRight = {
      float: 'right',
      color: 'black',
      transition: '0.2s ease-in-out',
      transform: 'rotate(0deg)',
      fontSize: 12,

    }

    const arrowFaceDown = {
      float: 'right',
      color: 'blue',
      transform: 'rotate(90deg)',
      transition: '0.2s ease-in-out',
      fontSize: 12,
      
    }

    
    return (
        <ListGroup className="sidebar" >
            <ListGroupItem className="sidebar-parent-item" >API</ListGroupItem>
            <ListGroupItem 
              className="sidebar-parent-item" 
              onClick={() => {this.toggleManualMenu()}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{margin: 0}}>Manual</p>
                <div style={!this.state.manualMenuOpen? arrowFaceRight : arrowFaceDown}>&#9658;</div>
              </div>

              <div style={this.state.manualMenuOpen? showChildrenStyle : hideChildrenStyle}>
                <ul class="sidebar-list">
                  <MenuItem onClick={() => history.push('/2')} eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                </ul>
              </div>                
            </ListGroupItem>

            <ListGroupItem className="sidebar-parent-item">Questionnaire</ListGroupItem>
            <ListGroupItem className="sidebar-parent-item">Financial Planner</ListGroupItem>
            <ListGroupItem className="sidebar-parent-item" onClick={() => history.push('/strategy-checklist')}><p>Click for checklist ;)</p></ListGroupItem>

        </ListGroup>
    );
  }
}



export default SideBar;