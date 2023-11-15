
import './sass/index.css';
import './assets/fonts/fonts.css'
import Header from './components/Header/Header'

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className='App'>
      <Router>
  
        <Routes>
    
          <Route path='/home' element={<Header className={'header'}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects 
          className={'projects'}
         
          />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
