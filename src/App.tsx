import { useRef, useEffect, useState } from 'react'
import { GameState } from './types'
import { initialState, updateGameState, increaseScore, checkClick, draw } from './game'

const App = () => {
    const [gameState, setGameState] = useState<GameState>(initialState)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (checkClick(event, gameState)) {
            const newState = increaseScore(gameState)
            setGameState(updateGameState(newState))
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const context = canvas.getContext('2d')
        if (!context) return

        draw(context, gameState)

        const intervalId = setInterval(() => {
            setGameState((prevState) => updateGameState(prevState))
        }, 2000);

        return () => {
            clearInterval(intervalId)
        }
    }, [gameState])

    const resetGame = () => {
        setGameState(initialState)
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 p-2 z-10 space-y-1">
                <p className='text-white'>Puntuación: {gameState.score}</p>
                <button
                    type='button'
                    className='p-2 uppercase text-xs font-bold text-gray-200 bg-yellow-600 w-full'
                    onClick={resetGame}
                >Reiniciar</button>
            </div>

            <canvas
                ref={canvasRef}
                onClick={handleClick}
                className="block flex-grow h-[80dvh] mt-auto bg-slate-950"
            />
        </div>
    )
}

export default App;
