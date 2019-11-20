import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import logo from '../../logo.svg';
import { fetchComments } from '../../actions/comment/commentsActions';

class CommentContainer extends Component {
	componentDidMount() {
		this.props.fetchComments()
	}

	render(){
    console.log(this.props.comments);
  
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<Comments
				comments={this.props.comments}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  console.log(state.comments.data[0]);
  return {
    comments: state.comments.data,
    loading: state.comments.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => {
      dispatch(fetchComments())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
