import React from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'


export default function QuesWindow() {

    const [questionsArray, setQuestionsArray] = React.useState([])
    const [playAgain, setPlayAgain] = React.useState(true)
    const [checked, setChecked] = React.useState(false)
    const [correct, setCorrect] = React.useState(0)

    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

    React.useEffect(function () {
        fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium')
            .then(value => value.json())
            .then(data => {
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
    }, [playAgain])

    function handleClickAnswer(id, answer) {
        setQuestionsArray(questions => questions.map(question => {
            return question.id === id ? { ...question, selected: answer } : question
        }))
    }

    function handleCheck() {
        let selected = true
        questionsArray.forEach(question => {
            if (question.selected === null) {
                selected = false
                return
            }
        })
        if (selected === false) {
            return
        }
        else {

            setQuestionsArray(questions => questions.map(question => {
                return { ...question, checked: true }
            }))
            setChecked(true)
            let correct = 0
            questionsArray.forEach(question => {
                if (question.correct === question.selected) {
                    correct += 1
                }
            })
            setCorrect(correct)
        }
    }

    function playGameAgain(){
        setPlayAgain(x => !x)
        setChecked(false)
        setQuestionsArray([])
    }

    const question = questionsArray.map(eachQuestion => {
        return < Questions
            key={eachQuestion.id}
            id={eachQuestion.id}
            question={eachQuestion}
            handleClickAnswer={handleClickAnswer}
        />
    })

    const showErrorMsg = (
        <h3>Some error occured, Kindly refresh the app</h3>
    )

    return (
        <>
            {(questionsArray.length ) ? (
                <div className='question-window'>
                    <div className="circle upper-circle" ></div>
                    <div className="circle lower-circle" ></div>
                    <h2 className='question-heading'>Select the right option</h2>
                    <div className='line'></div>
                    {question}
                    {checked && <h3 className='score'>You have scored {correct}/5 answers</h3>}
                    <button onClick={ checked ? playGameAgain : handleCheck} className='check-ans-btn'>{checked ? 'Play Again' : 'Check Answers'}</button>
                </div>
            ) : (
                <h1>Please Wait...</h1>
            )}
        </>
    )
}