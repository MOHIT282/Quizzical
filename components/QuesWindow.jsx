import React from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'


export default function QuesWindow(props) {

    const question = props.questionsArray.map(eachQuestion => {
        return < Questions
            key={eachQuestion.id}
            question={eachQuestion.question}
            correct_answer={eachQuestion.correct}
            answers={eachQuestion.answers}
        />
    })

    return (
        <>
            <div className='question-window'>
                <div className="circle upper-circle" ></div>
                <div className="circle lower-circle" ></div>
                <h2 className='question-heading'>Select the right option</h2>
                <div className='line'></div>
                {question}
                <button className='check-ans-btn'>Check Answers</button>
            </div>
        </>
    )
}