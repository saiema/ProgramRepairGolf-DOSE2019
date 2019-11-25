import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChallengeStats from './ChallengeStats';
import { fetchChallengeStats }  from '../../actions/challengeStatActions/challengeStatActions';

class ChallengeStatsContainer extends Component {
	componentDidMount() {
		this.props.fetchChallengeStats()
	}

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<ChallengeStats
				challengeStats={this.props.hackers}
				addHacker={this.props.addHacker}
				deleteHacker={this.props.deleteHacker}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    hackers: state.challengeStats.data,
    loading: state.challengeStats.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChallengeStats: () => {
      dispatch(fetchChallengeStats())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeStatsContainer)
