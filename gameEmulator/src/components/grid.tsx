type GridProps = {
  position: { row: number; col: number };
};

export function Grid({ position }: GridProps) {
  const cells = Array.from({ length: 169 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-13 gap-1">
      {cells.map((cell, index) => {
        const row = Math.floor(index / 13);
        const col = index % 13;
        const isActive = row === position.row && col === position.col;

        return (
          <div
            key={cell}
            className={`w-10 h-10 ${isActive ? "bg-red-500" : "bg-slate-500"} border border-slate-600 rounded flex items-center justify-center text-slate-300 text-xs hover:bg-slate-600 transition-colors cursor-pointer`}
          />
        );
      })}
    </div>
  );
}