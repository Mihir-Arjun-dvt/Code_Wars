import type { SetPositionProps } from "../types/types";

export async function handleDanger(
    setPosition: (setPositionProps: SetPositionProps) => void,
    jumpTimes: number,
    totalDurationMs: number
): Promise<void> {
    const delayPerJump = totalDurationMs / jumpTimes;

    for (let index = 0; index < jumpTimes; index++) {
        await new Promise((r) => setTimeout(r, delayPerJump * 2));

        const randomCol = Math.floor(Math.random() * 12);
        const randomRow = Math.floor(Math.random() * 12);
        setPosition({ row: randomRow, col: randomCol });
    }
}