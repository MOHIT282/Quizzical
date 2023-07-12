import React from 'react'
import Start from '../components/Start'
import QuesWindow from '../components/QuesWindow'
import { nanoid } from 'nanoid'

function App() {
  
  const [startGame, setStartGame] = React.useState(false)

  function toggleStartGame() {
    setStartGame(prev => !prev)
  }

  return (
    <div className='whole-window'>
        <div>
          {!startGame && (
            <Start
              startGame={startGame}
              toggleStart={toggleStartGame}
            />
          )}
          {startGame && <QuesWindow/>}
        </div>
    </div>
  )
}

export default App
