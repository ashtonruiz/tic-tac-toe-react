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
      if ((box.space === space) & (box.content === '')) {box.content = currentPlayer;
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');}
      return box;
    });
    setBoard(newBoard);


  };

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(null);
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider value={{ handleClick, board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  
  return context;
};


export { GameProvider, useGameContext };
