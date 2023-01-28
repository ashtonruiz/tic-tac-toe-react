import React from 'react';
import './Box.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Box({ box }) {
  const { handleClick } = useGameContext();
  return (
    <div className='box' onClick={() => handleClick(box.space)}>{box.content}</div>
  );
}

