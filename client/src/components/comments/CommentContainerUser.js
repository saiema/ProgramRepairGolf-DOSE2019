import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import logo from '../../logo.svg';
import { fetchCommentsUsers } from '../../actions/comment/commentsActions';

class CommentContainerUser extends Component {

	componentDidMount() {
		this.props.fetchCommentsUsers(this.props.user)
  }
  

	render(){
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
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
  return {
    fetchCommentsUsers: (id) => {
      dispatch(fetchCommentsUsers(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerUser)
