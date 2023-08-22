import './App.css';
import './sass/main.scss';
import Header from './components/Header/Header'
import SquareDiv from './components/SquareDiv/SquareDiv';

function App() {
  return (
    <div className="App">
      <Header>
        <SquareDiv variantGradient={'gradient-pink'} width={80} height={60} positionTop={0} positionLeft={8} >lood</SquareDiv>

      </Header>
    </div>
  );
}

export default App;
