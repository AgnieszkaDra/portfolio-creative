
import './sass/index.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import data from './data'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './components/About/About';
import Controlls from './components/Controlls/Controlls';
import SquareDiv from './components/SquareDiv/SquareDiv';
import Typography from './components/Typography/Typography';
import Image from './components/Image/Image';
import logo from '../src/assets/face.jpg'
import Dots from './components/Dots';

function App() {
  return (
    <div className='App'>
      <Router>
  
        <Routes>
        {/* <Route path='/' element={<Header className={'header'}/>} /> */}
          <Route path='/home' element={<Header className={'header'}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
