import React from 'react'
import { Link } from 'react-router-dom'


const Comments = ({ comments }) => {
    const commentList = comments.map(comment => {
      const id = comment.id;
      return (
        <div className="comment card" key={id}>
          <div className="card-content">

            <p>title: { comment.title } </p>
            <p>description: { comment.description }</p>
          </div>
        </div>
      )
    });

    return (
      <div className="post">
        <div className="comment-list">
          { commentList }
        </div>
      </div>
    );
  }

  export default Comments
