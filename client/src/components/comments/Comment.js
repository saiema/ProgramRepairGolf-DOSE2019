import React, { Component } from 'react';
import "./Style.css"

class Comment extends Component{


 render(){
  const comment = this.props.comment;

  return(
   <div>
      <h4>{comment.username}: { comment.title }</h4>
      <h5>{ comment.description }</h5>
      </div>
  );
      }
}

export default  Comment
