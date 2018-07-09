import React, { Component } from "react";



class CheckListHeader extends Component {
  constructor(props){
    super(props)
  }


  render() {
      
    return (
      <div style={{height: 80, width: '100%', borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
        <div style={{fontSize: 20}}>Your CheckList</div>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: 25, height: 25, borderRadius: '50%', backgroundColor: 'black', margin: 10}}/>
            <div>
                 <p style={{margin: 0}}>Black and white icons show areas of your</p>
                 <p style={{margin: 0}}>plan that are incomplete </p>
            </div>
        </div>
      </div>
    );
  }
}



export default CheckListHeader;