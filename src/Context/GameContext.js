import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content:'' },
    { space: 2, content: '' },
    { space: 3, content:'' },
    { space: 4, content: '' },
    { space: 5, content:'' },
    { space: 6, content: '' },
    { space: 7, content:'' },
    { space: 8, content:'' }]);
    
  const handleClick = (space) => {
    const newBoard = board.map((box) => {
      if ((box.space === space) && (box.content === '') && (active === true)) {box.content = currentPlayer;
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');}
      return box;
    });
    setBoard(newBoard);
    handleWin();
    // yesWin();
    
  };

  // function handleWin(box) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (box[a] && box[b] === box[c] && box[a] === box[c]) {
  //       return console.log('win');
  //     }
  //   }
  //   return null;
// const yesWin = () => {
  // if (active === true) checkWin();
// };

  const handleWin = () => {
    if ((board[0].content === board[1].content) & (board[0].content !== '') & (board[2].content === board [0].content)) setActive(false);
    if ((board[3].content === board[4].content) & (board[3].content !== '') & (board[5].content === board [3].content)) setActive(false);
    if ((board[6].content === board[7].content) & (board[6].content !== '') & (board[8].content === board [6].content)) setActive(false);
    if ((board[0].content === board[4].content) & (board[0].content !== '') & (board[8].content === board [0].content)) setActive(false);
    if ((board[2].content === board[4].content) & (board[2].content !== '') & (board[6].content === board [2].content)) setActive(false);
    if ((board[0].content === board[3].content) & (board[0].content !== '') & (board[6].content === board [0].content)) setActive(false);
    if ((board[1].content === board[4].content) & (board[1].content !== '') & (board[7].content === board [1].content)) setActive(false);
    if ((board[2].content === board[5].content) & (board[2].content !== '') & (board[8].content === board [2].content)) setActive(false);
  };
    
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(null);
  const [active, setActive] = useState(true);
    
  return (
    <GameContext.Provider value={{ handleWin, handleClick, board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}>
      {children}
    </GameContext.Provider>
  );
};


const useGameContext = () => {
  const context = useContext(GameContext);
  
  return context;
};
  
export { GameProvider, useGameContext };
