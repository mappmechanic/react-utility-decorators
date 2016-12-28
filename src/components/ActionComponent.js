import React,{ Component } from 'react';
import autobind from 'autobind-decorator';

import ABTestDecorator from '../util-decorators/abtest';
import MethodLogger from '../util-decorators/logger';

@autobind
@ABTestDecorator(['ButtonExperiment'])
class ActionComponent extends Component {

  @MethodLogger(true)
  onActionClick(buttonName){
    // Any Logic on Button Click
  }

  render() {
    // A/B Derived Style
    const allButtonsBackground = this.props.abData && this.props.abData.buttonBackgroundColour ? this.props.abData.buttonBackgroundColour : '#686868';

    const componentStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid',
      background: '#aeaeae',
      padding: '15px',
      flex: '3',
      margin: '10px'
    };

    const buttonContainer = {
      display: 'flex',
      flexDirection: 'row'
    }

    const buttonStyle = {
      padding: '15px',
      background: allButtonsBackground,
      color: '#fff',
      margin: '5px'
    }

    return (<div style={componentStyle}>
      <h3>ActionComponent B</h3>
      <div>
        { this.props.showDynamicActions &&
        this.props.dynamicActionsArray.map((action, index) => {
          return (
            <div> <button key={index} style={buttonStyle} onClick={() => this.onActionClick(action.value) }> {action.label} </button></div>
          );
        })
        }

        { !this.props.showDynamicActions &&
        <div style={buttonContainer}>
          <div>
            <button style={buttonStyle} onClick={() => this.onActionClick('StaticButton1') }> StaticButton1 </button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => this.onActionClick('StaticButton2') }> StaticButton2 </button>
          </div>
        </div>
        }
      </div>
    </div>);
  }
}

export default ActionComponent;
