import React, { Component } from 'react';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAddResponse} from '../../actions/comment/responsesActions';

class Comment extends Component{
  state={
    comment_id: null,
    press:false,
    count:this.props.responses.count
  }

  handleClick = id => (e) => {
    this.setState({press:true, comment_id: id});
  }

 render(){
  const press= this.state.press;
  const id = this.state.comment_id;
  const comment = this.props.comment;
  console.log(this.props.responses);
  const cant = this.state.count;
  return(
   <div className="card-content">
      <p>{comment.username} :</p>
      <p>title: { comment.title } </p>
      <p>description: { comment.description }</p>
      { comment.responses ?(
        <div>
      <Link to={{pathname:'/responses/'+ comment.id, state:{c:comment}}}> Show responses </Link>
      </div>
      ):(
      <div>
      </div>
      )}
      {console.log(cant === this.props.responses.count)}
      {id === comment.id & press & cant === this.props.responses.count?(
        <div>
        <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id}/>
        </div>
      ):(
        <div>
          <button onClick={this.handleClick(comment.id)}> Reply</button>
        </div>
      )}

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
export default  connect(mapStateToProps, mapDispatchToProps)(Comment)