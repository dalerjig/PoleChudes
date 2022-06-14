
import './App.css';
import React from 'react';

 import MainImage from './Components/MainImage.jsx';
 import Strelka from './Components/Strelka.jsx';
import Knopka from './Components/Knopka.jsx';
import Goals from './Components/Goals.jsx';
import Header from './Components/Header.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Goals />
      <MainImage/>
      <Strelka />
      <Knopka />
      
    </div>
  );
}



export default App;
