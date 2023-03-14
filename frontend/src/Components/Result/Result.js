import React from 'react'
import './Result.css'
function Result(props) {
  return (
    <div className='Result'>
        <div className="Entry">
        <h1>number : </h1> <h2> {props.data.number}</h2>
        </div>
        <div className="Entry">
        <h1>Date : </h1> <h2>{props.data.date}</h2>
        </div>
    </div>
  )
}

export default Result
