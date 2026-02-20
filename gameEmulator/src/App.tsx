import { Controls } from './components/Controls.tsx';
import { Grid } from './components/Grid.tsx';
import './index.css';
import { useState } from 'react';


type Direction = 'up' | 'down' | 'left' | 'right';

function App() {
  const [position, setPosition] = useState({ row: 6, col: 6 });

  const move = (direction: Direction) => {
    setPosition(prev => {
      let { row, col } = prev;
      if (direction === 'up' && row > 0) row--;
      if (direction === 'down' && row < 12) row++;
      if (direction === 'left' && col > 0) col--;
      if (direction === 'right' && col < 12) col++;
      return { row, col };
    });
  };

  const handleDanger = () => {
    const JumpTimes = 3;
    for (let index=0 ;index < JumpTimes; index++) {
     const randomCol =Math.floor(Math.random() * 12)
     const randomRow =Math.floor(Math.random() * 12)
    setPosition({row: randomRow, col: randomCol})   }
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
      <Grid position={position} />
      <Controls onMove={move} onDanger={handleDanger} />
    </div>
  );
}

export default App;