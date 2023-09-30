import './App.css';
import './sass/main.scss';
import Header from './components/Header/Header'
import SquareDiv from './components/SquareDiv/SquareDiv';
import Typography from './components/Typography/Typography';
import Image from './components/Image/Image';
import logo from '../src/assets/face.jpg'

function App() {
  return (
    <div className="App">
      <Header className={'header'}>
        <SquareDiv
          className={'square-first'}
          gradient={'gradient-pink'}
          extraClass={'div-first'}
        // positionTop={0}
        // positionLeft={90}
        >
       
            <Typography
              variant={'h2'}
              className={'portfolio-text first'}>
              PORTFOLIO
            </Typography>
          
         
            <Typography
              variant={'h2'}
              className={'portfolio-text second'}>
              PORTFOLIO
            </Typography>
          
          <Image
            className={'image first'}
            url={logo}
            name={logo}
          >
          </Image>
          <SquareDiv
            extraClass={'div-second'}
          >

          </SquareDiv>
          <div className={'dots-container'}>
          <div className={'dots-pattern'}>
            <div className={'triangle'}></div>
          </div>
          </div>
       
        </SquareDiv>
      </Header>
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default App;
