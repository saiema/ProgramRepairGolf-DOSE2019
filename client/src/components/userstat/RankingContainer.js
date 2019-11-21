import React, { Component } from 'react'
import styles from './style.css'
import { connect } from 'react-redux';
import Ranking from './Ranking';
import logo from '../../logo.svg';
import { fetchRanking } from '../../actions/UserStatActions';

class RankingContainer extends Component {
	componentDidMount() {
		this.props.fetchRanking()
	}

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<Ranking
				rankingList={this.props.ranking}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    ranking: state.ranking.data,
    loading: state.ranking.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRanking: () => {
      dispatch(fetchRanking())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingContainer)
