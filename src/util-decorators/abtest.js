import React,{ Component } from 'react';
import abdata from '../mockdata/abdata';

export default function ABTestDecorator(SubscribedExperiments, overrideProps){
  return (InnerComponent) => {
    class ABTestHoC extends Component {
      render() {
        let overridenProps = Object.assign({},this.props);
        let subscribedABData = {};
        SubscribedExperiments.map((experimentName) => {
          if(abdata.experiments[experimentName] && abdata.experiments[experimentName].isActive){
            subscribedABData = Object.assign({}, subscribedABData, abdata.experiments[experimentName].metaData);
          }
        });

        if(overrideProps) {
          Object.keys(subscribedABData).map((propName) => {
            overridenProps[propName] = subscribedABData[propName];
          });
        }

        return <InnerComponent {...overridenProps} abData={subscribedABData} />;
      }
    };

    return ABTestHoC;
  };
}