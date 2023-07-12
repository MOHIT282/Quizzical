import React from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

export default function Questions(props) {

    let answers = props.question.answers

    function handleClick(answer) {
        console.log('clicked')
        if (props.question.checked) {
            return
        }
        props.handleClickAnswer(props.id, answer)
    }


    const options = answers.map(option => {
        let id = null
        if (props.question.checked) {

            if (props.question.correct === option) {
                id = 'correct'
            }
            else if (props.question.selected === option) {
                id = 'incorrect'
            }
            else {
                id = 'not-selected'
            }
        }
        return (
            <button key={nanoid()} id={id} className={option === props.question.selected ? 'option selected' : 'option'} onClick={() => handleClick(option)}>{decode(option)}</button>
        )
    })
    return (
        <>
            <div className="whole-question">
                <h3 className='question-tab'>{decode(props.question.question)}</h3>
                <div className="options-tab">{options}</div>
            </div>
            <div className='line'></div>
        </>
    )
}