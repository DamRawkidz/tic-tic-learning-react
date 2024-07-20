
import Players from './components/PlayerInfo.jsx'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialName="Player 1" symbol="x" />
          <Players initialName="Player 2" symbol="x" />
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App
