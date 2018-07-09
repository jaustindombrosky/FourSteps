import React, { Component } from "react";
import { StrategyItem, StrategyContainer, StrategyButton, StrategyConName, StrategyListCon } from "../strategyCheckListStyle";
import {DebtEliminationIconActive, DisablityInsuranceIconActive, HealthInsuranceIconActive, LongTermCareIconActive, LifeInsuranceIconActive, EmergencyFundIconActive} from '../../../img/images';



class DefensiveStrategies extends Component {
  constructor(props){
    super(props)
    this.state = {
          emergency_fund: false,
          debt_elimination: false,
          life_insurance: false,
          disablity_insurance: false,
          health_insurance: false,
          // auto_insurance: false,
          // mortgage_insurance: false,
          longterm_care: false
    }
  }

  // componentDidMount(){
  //     let resdata = [{
  //       emergency_fund: false,
  //       debt_elimination: false,
  //       life_insurance: false,
  //       disablity_insurance: false,
  //       health_insurance: false,
  //       auto_insurance: false,
  //       mortgage_insurance: false,
  //       longterm_care: false
  //     }]

  //     this.setState({
  //       defenseValues: resdata[0]
  //     })
  // }



  render() {
    let {emergency_fund, debt_elimination, life_insurance, disablity_insurance, health_insurance, longterm_care} = this.state;
    console.log(this.state)
    // let displayStrategies = defenseValues.map((strategy, index) => {
    //   return(
    //     <div key={index}>
    //       <p>{strategy}</p>
    //     </div>
    //   );
    // });

    // function stuff(){
    //   let unformatedValues = Object.getOwnPropertyNames(defenseValues);
    //   un
    // }



    return (
        <StrategyContainer>
          <StrategyConName>
            <h3>Defense</h3>
          </StrategyConName>
          <StrategyListCon>
            <StrategyItem>
                <StrategyButton 
                  backgroundImage={EmergencyFundIconActive} 
                  onClick={() => {this.setState({emergency_fund: !this.state.emergency_fund})}} filter={emergency_fund? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Emergency Fund</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={DebtEliminationIconActive}
                  onClick={() => {this.setState({debt_elimination: !this.state.debt_elimination})}} filter={debt_elimination? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Debt Elimination</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={LifeInsuranceIconActive}
                  onClick={() => {this.setState({life_insurance: !this.state.life_insurance})}} filter={life_insurance? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Life Insurance</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={DisablityInsuranceIconActive}
                  onClick={() => {this.setState({disablity_insurance: !this.state.disablity_insurance})}} filter={disablity_insurance? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Disablity Insurance</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={HealthInsuranceIconActive} 
                  onClick={() => {this.setState({health_insurance: !this.state.health_insurance})}} filter={health_insurance? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Health Insurance</p>
            </StrategyItem>

            {/* <StrategyItem>
                <StrategyButton 
                  backgroundImage="http://res.cloudinary.com/landonwebdev/image/upload/v1518998878/Appr/banjokazooie_avatar.svg" 
                  onClick={() => {this.setState({auto_insurance: !this.state.auto_insurance})}} filter={auto_insurance? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Auto Insurance</p>
            </StrategyItem> */}

            {/* <StrategyItem>
                <StrategyButton 
                  backgroundImage="http://res.cloudinary.com/landonwebdev/image/upload/v1518998878/Appr/banjokazooie_avatar.svg" 
                  onClick={() => {this.setState({mortgage_insurance: !this.state.mortgage_insurance})}} filter={mortgage_insurance? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Mortgage Insurance</p>
            </StrategyItem> */}

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={LongTermCareIconActive}
                  onClick={() => {this.setState({longterm_care: !this.state.longterm_care})}} filter={longterm_care? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Longterm Care</p>
            </StrategyItem>
          </StrategyListCon>

        </StrategyContainer>
    );
  }
}



export default DefensiveStrategies;