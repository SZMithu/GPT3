import React from 'react';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import { Article } from '../../components';
const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id="blog">
      <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      <div className="gpt3__blog-container">
        <div className='gpt3__article-groupA'>
          <Article image={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__article-groupB'>
        <Article image={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article image={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog