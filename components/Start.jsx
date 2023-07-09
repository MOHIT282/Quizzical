import React from 'react'

export default function Start(props){
    return(
        <>
        <div className="main-window">
            <div className="circle upper-circle" ></div>
            <div className="circle lower-circle" ></div>
            <h2 className='heading'>Quizzical</h2>
            <p className='description'>Quizzical is a Quiz based game where you have to choose the single correct answers from multiple choices</p>
            <button className='start-btn' onClick={props.toggleStart} >Start Game</button>
        </div>
        </>
    )
}

