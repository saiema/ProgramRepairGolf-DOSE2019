import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import logo from '../../logo.svg';
import { fetchResponses } from '../../actions/comment/responsesActions';

class ResponsesContainer extends Component {


	componentDidMount() {
				console.log("estoy por ir al fetch eh");
				this.props.fetchResponses(this.props.match.params.id);
				console.log("ya volvi a container");
		}

	render(){
		console.log(this.props.responses);
    console.log(this.props.match.params.id);
    console.log(this.props.comment_id);
		const comment_id= this.props.match.params.id;
    console.log("aqui señora");
    const res=this.props.responses[comment_id];
    console.log(res);
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
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(" VER");
  return {
    fetchResponses: (id) => {
      dispatch(fetchResponses(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
