import type { SetPositionProps, Direction } from "../types/types";

export function moveCharacter(
    setPosition: React.Dispatch<React.SetStateAction<SetPositionProps>>,
    direction: Direction
) {
    setPosition(prev => {
        let { row, col } = prev;
        if (direction === 'up' && row > 0) row--;
        if (direction === 'down' && row < 12) row++;
        if (direction === 'left' && col > 0) col--;
        if (direction === 'right' && col < 12) col++;
        return { row, col };
    });
}