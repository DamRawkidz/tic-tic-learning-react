
import Players from './components/PlayerInfo.jsx'
import GameBroad from './components/GameBoard.jsx'
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialName="Player 1" symbol="x" />
          <Players initialName="Player 2" symbol="x" />
        </ol>
        <GameBroad />
      </div>
      LOG
    </main>
  )
}

export default App
