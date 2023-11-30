
import './sass/index.css';
import './assets/fonts/fonts.css'
import React from 'react'
import Header from './components/Header/Header'

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


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
