import React, { Component } from "react";
import { Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import StrategyCheckList from '../StrategyCheckList/StrategyCheckList';
import DefensiveStrategies from '../DefensiveStrategies/DefensiveStrategies'

class Content extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
        <div style={{width: '100%'}}>
            <Route path="/strategy-checklist" component={StrategyCheckList} />
            <Route path="/2"  component={DefensiveStrategies}/>
            <Route path="/3" component={<div> Path 3 </div>} />
            <Route path="/4" component={<div> Path 4 </div>} />
        </div>
    );
  }
}



export default Content;