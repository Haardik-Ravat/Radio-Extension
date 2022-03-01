import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import Lst from '../Popup/List';
import './Popup.css';
import VSlider from '../Popup/Sound';
import PlayBtn from '../Popup/Play';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Lst/>
        
        <p>

        </p>
        <PlayBtn/>
        <VSlider/>
      </header>
      
    </div>
  );
};

export default Popup;
