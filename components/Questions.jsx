import React from 'react'
import {decode} from 'html-entities'

export default function Questions({ answers, question, correct_answer }) {

    function handleClick(){
        
    }

    const options = answers.map(eachOption =>{
        return(
            <button className="option" onClick={()=>handleClick()}>{decode(eachOption)}</button>
        )
    })
    return (
        <>
        <div className="whole-question">
            <h3 className='question-tab'>{decode(question)}</h3>
            <div className="options-tab">{options}</div>
        </div>
        <div className='line'></div>
        </>
    )
}