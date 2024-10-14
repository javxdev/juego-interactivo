import { MouseEvent } from "react";
import { GameState } from "./types"; 

export const initialState: GameState = {
    score: 0,
    targetX: Math.random() * window.innerWidth,
    targetY: Math.random() * window.innerHeight,
    targetSize: 50
};

export const updateGameState = (state: GameState): GameState => {
    const heightLimit = window.innerHeight * 0.7
    const topMargin = window.innerHeight - heightLimit
    const bottomMargin = window.innerHeight * 0.05;

    return {
        ...state,
        targetX: Math.random() * (window.innerWidth - state.targetSize * 2) + state.targetSize,
        targetY: Math.random() * (heightLimit - bottomMargin - state.targetSize) + topMargin + state.targetSize,
        targetSize: Math.max(20, 50 - state.score),
    }
}

export const increaseScore = (state: GameState): GameState => ({
    ...state,
    score: state.score + 1
})

export const checkClick = (event: MouseEvent, state: GameState): boolean => {
    const rect = (event.currentTarget as HTMLCanvasElement).getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const distance = Math.sqrt((x - state.targetX) ** 2 + (y - state.targetY) ** 2);
    return distance < state.targetSize
}

export const draw = (context: CanvasRenderingContext2D, state: GameState) => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context.beginPath()
    context.arc(state.targetX, state.targetY, state.targetSize, 0, 2 * Math.PI)
    context.fillStyle = 'red'
    context.fill()
    context.closePath()
}
