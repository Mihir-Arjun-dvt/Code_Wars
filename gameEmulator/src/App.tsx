import { Controls } from './components/Controls.tsx';
import { Grid } from './components/Grid.tsx';
import './index.css';
import { useState } from 'react';
import { handleDanger } from './Utils/handleDanger.ts';
import { moveCharacter } from './Utils/moveCharacter.ts';
import type { Direction } from './types/types.ts';


function App() {
  const [position, setPosition] = useState({ row: 6, col: 6 });
const handleMove = (dir: Direction) => moveCharacter(setPosition, dir);
  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
      <Grid position={position} />
      <Controls onMove={handleMove} onDanger={()=>handleDanger(setPosition,50,5000)} />
    </div>
  );
}

export default App;