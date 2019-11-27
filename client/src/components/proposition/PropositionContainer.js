import React, { Component } from 'react';
import { connect } from 'react-redux';
import Propositions from './Propositions';
import logo from '../../logo.svg';
import { fetchPropositions, fetchPropositionsGame } from '../../actions/proposition/propositionsActions';

class PropositionContainer extends Component {

	componentDidMount() {
		this.props.fetchPropositionsGame()
	}

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<Propositions propositions={this.props.propositions}/>
    )
	}
}

const mapStateToProps = (state) => {
  return {
  
    propositions: state.propositions.data,
    //currentUser: state.current,
    loading: state.propositions.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPropositionsGame: () => {
      dispatch(fetchPropositionsGame())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropositionContainer)