
import Players from './components/PlayerInfo.jsx'
import GameBroad from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx'
import { WINNING_COMBINATIONS } from './winning-combination.js'
import { useState } from 'react'
const PALYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  return gameBoard
}

function deriveWinner(gameBoard, Players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = Players[firstSquareSymbol]
    }
  }

  return winner
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}


function App() {
  const [players, setPlayer] = useState(PALYERS)
  const [gameturn, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameturn)
  const gameBoard = deriveGameBoard(gameturn)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameturn.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTruns => {
      let currentPlayer = deriveActivePlayer(prevTruns)

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTruns
      ]

      return updateTurns
    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    console.log('func here')
    setPlayer(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Players initialName={PALYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Players initialName={PALYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBroad
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          borad={gameBoard}
        />
      </div>
      <Log turns={gameturn} />
    </main>
  )
}

export default App
