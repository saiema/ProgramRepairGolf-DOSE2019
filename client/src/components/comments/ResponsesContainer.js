import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import logo from '../../logo.svg';
import Comment from './Comment';
import { fetchResponses } from '../../actions/comment/responsesActions';
import AddResponse from './AddResponse';

class ResponsesContainer extends Component {


	componentDidMount() {
				this.props.fetchResponses(this.props.match.params.id);
		}
// <Comment comment={this.props.comment} />
//REsponse
// <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id} />
	render(){
    console.log(this.props.location);
		console.log(this.props.responses);
    console.log(this.props.match.params.id);
    console.log(this.props.comment);
		const comment_id= this.props.match.params.id;
    console.log("aqui señora");
    const res=this.props.responses[comment_id];
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
       <div>
			  <Responses
				 responses={this.props.responses} id={this.props.match.params.id}
			  />
       
       </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    responses: state.responses.data,
    loading: state.responses.loading,
    //    currentUser_id: state.user.currentUser.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(" VER");
  return {
    fetchResponses: (id) => {
      dispatch(fetchResponses(id))
    },
    // addResponse: (res) => {
    //   dispatch(fetchAddResponse(res))
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
