
import './sass/index.css';
import './assets/fonts/fonts.css'
import React from 'react'
import Header from './components/layout/Header/Header';
import Controlls from './components/ui/Controlls/Controlls';

function App() {
  return (
    <div className='App'>
      <Controlls className={'controlls'}></Controlls>
      <Header></Header>
    </div>
  );
}

export default App;
