import React, { Component } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import {fetchAddResponse} from '../../actions/comment/responsesActions';

class Comments extends Component{
  state={
    comment_id: null,
    press:false,
    count:this.props.responses.count
  }

  handleClick = id => (e) => {
    this.setState({press:true, comment_id: id});
  }

  reset = (e) => {
    this.setState({press:false});
  }

    commentList(){
      const press= this.state.press;
      const id = this.state.comment_id;
      const comments= this.props.comments;
      console.log(id);
      console.log(press);
      const cant = this.state.count;
      return comments.map(comment =>
          <div className="comment card" key={comment.id}>
              <Comment comment={comment}/>
              {id === comment.id & press ?(
                <div>
                  <button onClick={this.reset}>Cerrar</button> 
                  <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id}/>
                </div>
              ):(
                <div>
                  <button onClick={this.handleClick(comment.id)}> Reply</button>
                </div>
              )}
             { comment.responses ?(
                <div>
                  <Link to={{pathname:'/responses/'+ comment.id, state:{c:comment}}}> Show responses </Link>
                </div>
              ):(
                <div>
                </div>
              )}
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
  return {
    addResponse: (res) => {
      dispatch(fetchAddResponse(res))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    responses: state.responses,
    loading: state.comments.loading,
    currentUser_id: state.user.currentUser.id,
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Comments)

