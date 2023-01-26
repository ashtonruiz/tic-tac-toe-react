import { createContext, useContext, useState } from 'react';
import boardData from '../Board-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(null);
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};


export { GameProvider, useGameContext };

export function handleClick() {
  console.log('i am being clicked');
}