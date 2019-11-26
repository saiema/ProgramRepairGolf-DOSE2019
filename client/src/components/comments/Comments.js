import React, { Component } from 'react';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAddResponse} from '../../actions/comment/commentsActions';

class Comments extends Component{
    state={
      press:false
    }

    handleClick = (e) => {
      this.setState({press:true});
    }

    commentList(){
      const press= this.state.press;
      const comments= this.props.comments;
      return comments.map(comment =>
          <div className="comment card" key={comment.id}>
            <div className="card-content">
              <p>title: { comment.title } </p>
              <p>description: { comment.description }</p>
              { comment.responses ?(
                <div>
              <Link to={'/responses/'+ comment.id} comment_id={comment.id}> Show responses </Link>
               </div>
               ):(
               <div>
               </div>
              )}
              <button onClick={()=>this.handleClick(press)}> Reply</button>
              {press ?(
                <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id}/>
              ):(
                <div>
                </div>
              )}


            </div>

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


const mapDispatchToProps = (dispatch) => {
  console.log();
  return {
    addResponse: (res) => {
      dispatch(fetchAddResponse(res))
    },
  }
}

export default  connect(null,mapDispatchToProps)(Comments)
