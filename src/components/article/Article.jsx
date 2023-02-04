import React from 'react'
import './article.css';
const Article = ({image, date, title}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
       <img src={image} alt={title} />
      </div>
      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <div>
          <button>Read Full Article</button>
        </div>      
      </div>
     </div>
  )
}

export default Article