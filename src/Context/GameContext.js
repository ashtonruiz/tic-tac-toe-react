import { createContext, useContext } from 'react';
import { useState } from 'react';


const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  return (
    <GameContext.Provider value={{ board, setBoard }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};


export { GameProvider, GameContext, useGameContext };