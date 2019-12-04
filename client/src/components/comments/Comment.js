import React, { Component } from 'react';
import "./Style.css"

class Comment extends Component{


 render(){
  const comment = this.props.comment;

  return(
   <div>
      <h5 className="title">{comment.username}: { comment.title }</h5>
      <h6 className="description">{ comment.description }</h6>
    </div>
  );
      }
}

export default  Comment
