
import Players from './components/PlayerInfo.jsx'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="x" />
          <Players name="Player 2" symbol="x" />
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App
