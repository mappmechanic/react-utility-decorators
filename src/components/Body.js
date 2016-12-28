import React,{ Component } from 'react';

import InfoComponent from './InfoComponent';
import ActionComponent from './ActionComponent';

class Body extends Component {

  render() {
    const bodyContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid',
      padding: '15px',
      flex: '4'
    };

    const componentsRowStyle = {
      display: 'flex',
      flexDirection: 'row',
    }

    return (<div style={bodyContainerStyle}>
     <div>
       Body Section <br /><br />
     </div>
      <div style={componentsRowStyle}>
        <InfoComponent name="IC1" />
        <ActionComponent/>
      </div>
      <div style={componentsRowStyle}>
        <ActionComponent name="" />
        <InfoComponent name="IC2"/>
      </div>
    </div>);
  }
}

export default Body;