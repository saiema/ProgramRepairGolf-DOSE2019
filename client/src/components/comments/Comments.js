import React, { Component } from 'react';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAddResponse} from '../../actions/comment/responsesActions';

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
            <div className="card-content">
              <p>{comment.username} :</p>
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
              {id === comment.id & press ?(
                <div>
                <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id}/>
                </div>
              ):(
                <div>
                  <button onClick={this.handleClick(comment.id)}> Reply</button>
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

const mapStateToProps = (state) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Comments)
