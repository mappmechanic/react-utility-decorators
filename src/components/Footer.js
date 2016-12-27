import React,{ Component } from 'react';

class Footer extends Component {

  render() {
    const footerStyle = {
      display: 'block',
      height: '40px',
      fontSize: '16px',
      borderBottom: '1px solid',
      marginTop: '20px',
      flex: '1 30px'
    };

    return (<div style={footerStyle}>
      Footer - &copy; Copyrights with <a href="http://twitter.com/mappmechanic">mAppMechanic</a>
    </div>);
  }
}

export default Footer;