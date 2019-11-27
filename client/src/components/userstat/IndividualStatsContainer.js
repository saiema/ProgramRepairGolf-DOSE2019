import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualStats from './IndividualStats';
import logo from '../../logo.svg';
import { fetchRanking } from '../../actions/UserStatActions';
import { fetchIndividualUserStats } from '../../actions/UserStatActions';


class IndividualStatsContainer extends Component {
	componentDidMount() {
		this.props.fetchIndividualUserStats()
	}

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<IndividualStats
				stats={this.props.individual_stats}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    individual_stats: state.individual_stats.data,
    loading: state.individual_stats.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndividualUserStats: (id) => {
      dispatch(fetchIndividualUserStats(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualStatsContainer)
