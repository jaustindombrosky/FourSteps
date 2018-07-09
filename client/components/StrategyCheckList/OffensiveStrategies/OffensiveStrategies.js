import React, { Component } from "react";
import { StrategyItem, StrategyContainer, StrategyButton, StrategyConName, StrategyListCon } from "../strategyCheckListStyle";
import {
  TaxPlanningIconActive,
  FeesAndCommissionsIconActive,
  MajorPurchaseIconActive,
  DiversificationPlanIconDisabled,
  RateOfReturnIconActive,
  DiversificationPlanIconActive
} from '../../../img/images';

class OffensiveStrategies extends Component {
  constructor(props){
    super(props)
    this.state = {
      diversification: false,
      major_purchase_plan: false,
      tax_planning: false,
      rate_of_return: false,
      fees_and_commissions: false,
    }
  }

  componentWillMount(){
      let resdata = {
        emergency_fund: false,
        debt_elimination: false,
        life_insurance: false,
        disablity_insurance: false,
        health_insurance: false,
        auto_insurance: false,
        mortgage_insurance: false,
        longterm_care: false
      }

      this.setState({
        defenseValues: resdata
      })
  }

  render() {
    let { diversification, major_purchase_plan, tax_planning, rate_of_return, fees_and_commissions } = this.state;

    return (
        <StrategyContainer>
          <StrategyConName>
            <h3>Offense</h3>
          </StrategyConName>
          <StrategyListCon>
            <StrategyItem>
                <StrategyButton 
                  backgroundImage={DiversificationPlanIconActive}
                  onClick={() => {this.setState({diversification: !this.state.diversification})}} filter={diversification? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Diversification</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={MajorPurchaseIconActive} 
                  onClick={() => {this.setState({major_purchase_plan: !this.state.major_purchase_plan})}} filter={major_purchase_plan? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Major Purchase Plan</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={TaxPlanningIconActive}
                  onClick={() => {this.setState({tax_planning: !this.state.tax_planning})}} filter={tax_planning? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Tax Planning</p>
            </StrategyItem>

            <StrategyItem>
                <StrategyButton 
                  backgroundImage={RateOfReturnIconActive} 
                  onClick={() => {this.setState({rate_of_return: !this.state.rate_of_return})}} filter={rate_of_return? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Rate Of Return</p>
            </StrategyItem>


            <StrategyItem>
                <StrategyButton 
                  backgroundImage={FeesAndCommissionsIconActive}
                  onClick={() => {this.setState({fees_and_commissions: !this.state.fees_and_commissions})}} filter={fees_and_commissions? '' : "filter:gray; -webkit-filter:grayscale(100%); -moz-filter:grayscale(100%); filter:grayscale(100%);"} 
                />
                <p>Fees & Commissions</p>
            </StrategyItem>
          </StrategyListCon>

        </StrategyContainer>
    );
  }
}



export default OffensiveStrategies;