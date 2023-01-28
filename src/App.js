import Board from './Components/Board/Board.js';
import Header from './Components/Header/Header.js';


function App() {
  // const { currentPlayer, setCurrentPlayer } = useContext(GameContext);
  return (
    <div className='App'>
      <Header/>
      <Board/>
    </div>
  );
}

export default App;
