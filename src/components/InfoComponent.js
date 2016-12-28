import React,{ Component } from 'react';
import ABTestDecorator from '../util-decorators/abtest';

@ABTestDecorator(['DynamicInfoExperiment'], true)
class InfoComponent extends Component {

  constructor(){
    super();
    this.dynamicInfoArray = [{
      label: 'DynamicInfo1',
      value: 'DynamicValue1'
    },{
      label: 'DynamicInfo2',
      value: 'DynamicValue2'
    }
    ];
  }

  render() {
    const componentBackgroundColor = this.props.abData && this.props.abData.backgroundColor ? this.props.abData.backgroundColor : '#aeaeae';
    const componentStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid',
      background: componentBackgroundColor,
      padding: '15px',
      flex: '2',
      margin: '10px',
      overflow: 'hidden'
    };

    return (<div style={componentStyle}>
      <h3>InfoComponent {this.props.name}</h3>

      { this.props.showDynamicInfo &&
        this.dynamicInfoArray.map((info, index) => {
          return (
            <div key={index}><span>{info.label}</span> : <span>{info.value}</span></div>
          );
        })
      }

      { !this.props.showDynamicInfo &&
        <div>
          <div>
            <span>Static Info1 :</span>
            <span>Static Value1</span>
          </div>
          <div>
            <span>Static Info2 :</span>
            <span>Static Value2</span>
          </div>
        </div>
      }
    </div>);
  }
}

export default InfoComponent;