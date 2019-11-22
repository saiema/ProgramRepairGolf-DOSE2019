import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import logo from '../../logo.svg';
import { fetchCommentsUsers } from '../../actions/comment/commentsActions';
import { fetchAddComment } from '../../actions/comment/commentsActions';
import AddComment from './AddComment';

class CommentContainer extends Component {

  state = {
    press:false
  }
	componentDidMount() {
		this.props.fetchCommentsUsers()
  }
  
  handleClick=(e)=>{
    this.setState({press:true});
  }

	render(){
    console.log(this.props.comments);
    console.log();
    const press= this.state.press;
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
      <div>
      <button onClick= {this.handleClick}>+</button>
      </div>
    {press ? (
      <div>
        <AddComment addComment={this.props.addComment}/>
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

const mapStateToProps = (state) => {
  return {
    comments: state.comments.data,
    loading: state.comments.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log();
  return {
    fetchCommentsUsers: () => {
      dispatch(fetchCommentsUsers())
    },
    addComment: (comment) => {
      dispatch(fetchAddComment(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
