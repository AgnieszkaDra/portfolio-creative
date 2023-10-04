
import './sass/index.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import data from './data'
import SquareDiv from './components/SquareDiv/SquareDiv';
import Typography from './components/Typography/Typography';
import Image from './components/Image/Image';
import logo from '../src/assets/face.jpg'
import Dots from './components/Dots';


function App() {
  return (
    <div className="App">
      <Header className={'header'} {...data}>
 
    
      </Header>
     <Main className={'main'} ></Main>
    </div>
  );
}

export default App;
