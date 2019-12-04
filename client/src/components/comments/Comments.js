import React, { Component } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import AddResponse from './AddResponse';
import { connect } from 'react-redux';
import {fetchAddResponse} from '../../actions/comment/responsesActions';
import {Button, ButtonGroup} from 'reactstrap';
import "./Style.css";
class Comments extends Component{
  state={
    comment_id: null,
  }


  handleDeleteClick = id => (e)=>{
    this.props.deleteComment(id);
  }
  

    commentList(){
      const id = this.state.comment_id;
      const comments= this.props.comments;

      const currentuser_id = this.props.user_id;
      const responses= this.props.responses;
      return (
        <div>
          {comments.length === 0 ? (
            <h4> 
              There are not comments to show
            </h4>
          ):(
            <div>
            {comments.map(comment => (
              <section className= "commentSeccion">
                <div className="comment" key={comment.id}>
                    <Comment comment={comment}/>
                    <div className="box">
                    <Link className= "button-comment" to={"/responses/"+comment.id}> REPLY </Link>      
                    {currentuser_id === comment.user_id ?(
                        <button className= "button-comment" onClick={this.handleDeleteClick(comment.id)}> DELETE </button>
                    ):(
                      <div>
                      </div>
                    )}

                   { comment.responses ?(
                        <Link className= "button-comment" to={'/responses/'+ comment.id}> SHOW RESPONSES </Link>
                    ):(
                      <div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
      
              ))}
              </div>
          )}
        </div>
      );

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

const mapStateToProps = (state) => {
  return {
    responses: state.responses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResponse: (res) => {
      dispatch(fetchAddResponse(res))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
