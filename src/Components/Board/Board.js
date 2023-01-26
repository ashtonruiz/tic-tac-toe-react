import React from 'react';
import Box from '../Box/Box.js';
import boardData from '../../Board-data.js';
import './Board.css';

export default function Board() {
  return (
    <div>
      {boardData.map((data) => (
        <Box key={data.space}/>
      ))} 
    </div>

  );
}

