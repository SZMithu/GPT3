import React from 'react'
import './feature.css';
const Feature = ({title, text}) => {
  return (
    <div className='gpt3__feature__container'>
       <div className='gpt3__feature__title'>
       <div className='gpt3__feature__bar'></div>
        <h1>{title}</h1>
       </div>
       <div className='gpt3__feature__text'>
       <p>{text}</p>
       </div>
     </div>
  )
}

export default Feature