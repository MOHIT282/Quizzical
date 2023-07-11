import React from 'react'
import Start from '../components/Start'
import QuesWindow from '../components/QuesWindow'
import { nanoid } from 'nanoid'

function App() {
  const [questionsArray, setQuestionsArray] = React.useState([])
  const [startGame, setStartGame] = React.useState(false)

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);


  React.useEffect(function () {
    fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=medium')
      .then(value => value.json())
      .then(data => {
        console.log(data.results)
        let question_array = []

        data.results.forEach(question => {
            question_array.push({
              id: nanoid(),
              answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
              question: question.question,
              correct: question.correct_answer,
              selected: null,
              checked: false
            })
        })
        setQuestionsArray(question_array)
      })
  }, [])

  function toggleStartGame() {
    setStartGame(prev => !prev)
  }

  return (
    <div className='whole-window'>
      {!questionsArray.length ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {!startGame && (
            <Start
              questionsArray={questionsArray.answers}
              startGame={startGame}
              toggleStart={toggleStartGame}
            />
          )}
          {startGame && <QuesWindow 
          questionsArray={questionsArray} 
          />}
        </div>
      )}
    </div>
  )
}

export default App
