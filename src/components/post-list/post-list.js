import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import '../post-list-item/post-list-item.css'


const PostList = ({ posts }) => {
  
  const elements = posts.map(e => {
    const { id, ...eProps } = e;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...eProps}/>
      </li>
    )
  })

  return (
    <ul className="app-list list-group-item">
      {elements}
    </ul>
  )
}

export default PostList;