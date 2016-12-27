import React,{ Component } from 'react';

class Header extends Component {

  render() {
    const headerStyle = {
      display: 'block',
      height: '40px',
      fontSize: '20px',
      borderBottom: '1px solid',
      flex:'0 50px',
    };

    return (<div style={headerStyle}>
      Header Text
    </div>);
  }
}

export default Header;