import React from 'React';
import { render } from 'react-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    height: '100%'
  }

  return (
  <div style={containerStyle}>
    <Header/>
    <Body/>
    <Footer/>
  </div>
)};

render(
  <App />,
  document.getElementById('root')
);

