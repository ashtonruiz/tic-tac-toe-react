import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
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
    checkScratch();
  };

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
  
  const checkScratch = () => {
    if ((board[0].content !== '') & (board[1].content !== '') & (board[2].content !== '') & (board[3].content !== '') & (board[4].content !== '') & (board[5].content !== '') & (board[6].content !== '') & (board[7].content !== '') & (board[8].content !== '')) console.log('scratch');
  };

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(null);
  const [active, setActive] = useState(true);
    
  return (
    <GameContext.Provider value={{ checkScratch, handleWin, handleClick, board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}>
      {children}
    </GameContext.Provider>
  );
};


const useGameContext = () => {
  const context = useContext(GameContext);
  
  return context;
};
  
export { GameProvider, useGameContext };
