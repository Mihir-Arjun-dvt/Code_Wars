import { HiArrowDown } from "react-icons/hi";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";

type Direction = 'up' | 'down' | 'left' | 'right';

type ControlsProps = {
  onMove: (direction: Direction) => void;
  onDanger: () => void;
};

export function Controls({ onMove, onDanger }: ControlsProps) {
  return (
    <div className="flex items-center gap-8">
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-36 h-36">
        <div />
        <button onClick={() => onMove('up')} className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-sm">
          <HiArrowUp size={30}/>
        </button>
        <div />
        <button onClick={() => onMove('left')} className="px-2 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors font-medium border border-slate-600 text-sm">
          <HiArrowLeft size={30}/>
        </button>
        <div />
        <button onClick={() => onMove('right')} className="px-2 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors font-medium border border-slate-600 text-sm">
          <HiArrowRight size={30}/>
        </button>
        <div />
        <button onClick={() => onMove('down')} className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-sm">
          <HiArrowDown size={30}/>
        </button>
        <div />
      </div>

      <button onClick={onDanger} className="px-6 py-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
        Danger
      </button>
    </div>
  );
}