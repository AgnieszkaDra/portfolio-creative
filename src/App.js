import './App.css';
import './sass/index.css';
import Header from './components/Header/Header'
import SquareDiv from './components/SquareDiv/SquareDiv';
import Typography from './components/Typography/Typography';
import Image from './components/Image/Image';
import logo from '../src/assets/face.jpg'
import Dots from './components/Dots';

function App() {
  return (
    <div className="App">
      <Header className={'header'}>
        {/* <SquareDiv
          className={'square-first'}
          gradient={'gradient-pink'}
          extraClass={'div-first'}
        // positionTop={0}
        // positionLeft={90}
        > */}
       
            <Typography
              variant={'h1'}
              className={'header__text first'}>
              PORTFOLIO
            </Typography>
          
         
            <Typography
              variant={'h2'}
              className={'header__text second'}>
              PORTFOLIO
            </Typography>
          
          <Image
            className={'header__image'}
            url={logo}
            name={logo}
          >
          </Image>
        
          <Dots className={'header__dots--up'} spanHorizontal={3} spanVertical={3}></Dots>
          <Dots className={'header__dots--down'} spanHorizontal={5} spanVertical={3}></Dots>
          <Typography
              variant={'h3'}
              className={'header__text third'}>
              HI, I'M
            </Typography>
            <Typography
              variant={'h3'}
              className={'header__text fourth'}>
              AGNIESZKA DRAGAŃCZYK
            </Typography>
    
      </Header>
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default App;
