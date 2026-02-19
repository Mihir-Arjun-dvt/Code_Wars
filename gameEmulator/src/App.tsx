import './index.css'
import { goRight, goUp, goDown, goLeft } from './utils/actions';

function App() {
  const cells = Array.from({ length: 144 }, (_, i) => i + 1);

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">

      {/* Grid */}
      <div className="grid grid-cols-12 gap-1">
        {cells.map((cell) => (
          <div
            key={cell}
            className="w-10 h-10 bg-slate-700 border border-slate-600 rounded flex items-center justify-center text-slate-300 text-xs hover:bg-slate-600 transition-colors cursor-pointer"
          >

          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 w-36 h-36">
          <div />
          <button className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-sm">
            Up
          </button>
          <div />
          <button className="px-2 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors font-medium border border-slate-600 text-sm">
            Left
          </button>
          <div />
          <button className="px-2 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors font-medium border border-slate-600 text-sm">
            Right
          </button>
          <div />
          <button className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-sm">
            Down
          </button>
          <div />
        </div>
        <button className="px-6 py-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
          Danger
        </button>
      </div>
    </div>
  )
}

export default App