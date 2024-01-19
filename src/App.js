
import './sass/index.css';
import './assets/fonts/fonts.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import About from './components/layout/About/About';
import Projects from './components/layout/Projects/Projects';
import Contact from './components/layout/Contact/Contact';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {<Route path='/' element={<Header className={'header'} />} />}
          {<Route path='/home' element={<Header className={'header'} />} />}
          {<Route path='/about' element={<About className={'about'}/>} />}
          {<Route path='/projects' element={<Projects className={'projects'} />} />}
          {<Route path='/contact' element={<Contact className={'contact'} />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
