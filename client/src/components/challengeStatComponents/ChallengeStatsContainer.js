import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChallengeStats from './ChallengeStats';
import logo from '../../logo.svg';
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
				challengeStats={this.props.challengeStats}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    challengeStats: state.challengeStats.data,
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
