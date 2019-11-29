import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component{
    state={
      comment_id: null,
      press:false
    }

    handleClick = id => (e) => {
      this.setState({press:true, comment_id: id});
    }

    commentList(){
      const press= this.state.press;
      const id = this.state.comment_id;
      const comments= this.props.comments;
      console.log(id);
      console.log(press);
      return comments.map(comment =>
          <div className="comment card" key={comment.id}>
              <Comment comment={comment}/>

          </div>

        )

    }

    render(){

    return (
      <div className="post">
        <div className="comment-list">
          { this.commentList() }
        </div>
      </div>
    );
  }
}




export default  Comments
