import { useState } from "react"

const initialGameBroad = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBroad() {
    const [gameBoard, setGameBoard] = useState(initialGameBroad)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBroad) => {
            const updatedBoard = [...prevGameBroad.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X'
            return updatedBoard
        })
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}