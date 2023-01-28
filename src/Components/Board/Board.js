import Box from '../Box/Box.js';
import './Board.css';
import { useGameContext } from '../../Context/GameContext.js'; 



export default function Board() {
  const { setBoard, setCurrentPlayer, setActive } = useGameContext();
  const { board } = useGameContext();
  return (
    <>
      <div className='board'>
        {board.map((box) => (
          <Box key={box.space} box={box}/>
        ))} 
      </div>
      <button type='reset' onClick={resetGame}>Reset</button>
    </>
  );

  function resetGame() {
    setActive(true), setCurrentPlayer('X'), setBoard([
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content:'' },
      { space: 4, content: '' },
      { space: 5, content:'' },
      { space: 6, content: '' },
      { space: 7, content:'' },
      { space: 8, content:'' }]);
  }
}




