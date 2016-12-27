import React,{ Component } from 'react';

class Body extends Component {

  render() {
    const bodyContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid',
      padding: '15px',
      flex: '4'
    };

    return (<div style={bodyContainerStyle}>
      Body
    </div>);
  }
}

export default Body;