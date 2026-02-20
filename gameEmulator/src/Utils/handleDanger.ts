import type { SetPositionProps } from "../types/types";

export async function handleDanger(
    setPosition: (setPositionProps: SetPositionProps) => void,
    jumpTimes: number,
    totalDurationMs: number
): Promise<void> {

    const sumOfSteps = (jumpTimes * (jumpTimes - 1)) / 2;

    const timeUnit = totalDurationMs / sumOfSteps;

    for (let index = 0; index < jumpTimes; index++) {
        const randomCol = Math.floor(Math.random() * 12);
        const randomRow = Math.floor(Math.random() * 12);
        
        setPosition({ row: randomRow, col: randomCol });

        const currentDelay = index * timeUnit;

        await new Promise((r) => setTimeout(r, currentDelay));
    }
}