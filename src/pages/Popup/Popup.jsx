import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import SelectAutoWidth from '../Popup/List';
import './Popup.css';
import VSlider from '../Popup/Sound';
import PlayBtn from '../Popup/Play';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SelectAutoWidth/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <PlayBtn/>
        <VSlider/>
      </header>
      
    </div>
  );
};

export default Popup;
