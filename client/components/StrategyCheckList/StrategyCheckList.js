import React, { Component } from "react";
import OffensiveStrategies from './OffensiveStrategies/OffensiveStrategies';
import DefensiveStrategies from './DefensiveStrategies/DefensiveStrategies'
import { StrategyCheckListContainer } from './strategyCheckListStyle';
import CheckListHeader from './CheckListHeader/CheckListHeader';


class StrategyCheckList extends Component {
  constructor(props){
    super(props)
  }


  render() {



    return (
      <div>
      <CheckListHeader />
      <StrategyCheckListContainer>
        <OffensiveStrategies />
        <DefensiveStrategies />
      </StrategyCheckListContainer>
      </div>
    );
  }
}



export default StrategyCheckList;