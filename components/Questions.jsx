import React from 'react'
import {decode} from 'html-entities'

export default function Questions({ answers, question }) {


    return (
        <>
        <div className="whole-question">
            <div className='question-tab'>{decode(question)}</div>
            <div className="options-tab">
            <div className="option option-1">{decode(answers[0])}</div>
            <div className="option option-2">{decode(answers[1])}</div>
            <div className="option option-3">{decode(answers[2])}</div>
            <div className="option option-4">{decode(answers[3])}</div>
            </div>
        </div>
        <div className='line'></div>
        </>
    )
}