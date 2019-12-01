import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import logo from '../../logo.svg';
import { fetchCommentsChallenge } from '../../actions/comment/commentsActions';
import { fetchAddComment } from '../../actions/comment/commentsActions';
import AddComment from './AddComment';

class CommentContainerChallenge extends Component {

  state = {
    press:false
  }
	componentDidMount() {
		this.props.fetchCommentsChallenge(this.props.match.params.id)
  }

  handleClick=(e)=>{
    this.setState({press:true});
  }



	render(){
    console.log(this.props.currentUser_id);
    const press= this.state.press;
    console.log(press);
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
      <div>
      <button onClick= {this.handleClick}>+</button>
      </div>
    {press ? (
      <div>
        <AddComment user_id={this.props.currentUser_id} challenge_id={this.props.challenge} addComment={this.props.addComment}/>
        </div>
      ):(
        <div></div>
      )}
      <div>
			<Comments
				comments={this.props.comments}
			/>
      </div>
      </div>
		)
	}
}

const mapStateToProps = (state,props) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
    currentUser_id: state.user.currentUser.id,
    challenge: props.match.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentsChallenge: (id) => {
      dispatch(fetchCommentsChallenge(id))
    },
    addComment: (comment) => {
      dispatch(fetchAddComment(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerChallenge)
