import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'react-bootstrap';
import './post-list.css';


const PostList = ({ posts, onDelete}) => {
  
  const elements = posts.map(e => {
    const { id, ...eProps } = e;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...eProps}
        onDelete={()=>onDelete(id)}
        />
      </li>
    )
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;