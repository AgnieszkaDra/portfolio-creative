import './App.css';
import './sass/main.scss';
import Header from './components/Header/Header'
import SquareDiv from './components/SquareDiv/SquareDiv';
import Typography from './components/Typography/Typography'

function App() {
  return (
    <div className="App">
      <Header>
        <SquareDiv
          className={'square'}
          gradient={'gradient-pink'}
          extraClass={'div-first'}
          positionTop={0}
          positionLeft={90}
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
        </SquareDiv>
      </Header>
      <main>
        <section></section>
      </main>
    </div>
  );
}

export default App;
