import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import logo from '../../logo.svg';
import { fetchResponses } from '../../actions/comment/responsesActions';

class ResponsesContainer extends Component {

	componentDidMount() {
		this.props.fetchResponses(this.props.match.params.id)
  }


	render(){
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
       <div>
			  <Responses
				 responses={this.props.responses}
			  />
       </div>
      </div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    responses: state.comment.responses,
    loading: state.comment.responses.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponses: (id) => {
      dispatch(fetchResponses(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
