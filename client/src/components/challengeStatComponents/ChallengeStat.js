import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchChallengeStat }  from '../../actions/challengeStatActions/challengeStatActions';

class ChallengeStat extends Component {
  componentDidMount() {
    //this.props.fetchChallengeStat(this.props.match.params.challenge_id)
    this.props.fetchChallengeStat(2)
  }

  render() {
    const { challengeStat } = this.props
    return (
      challengeStat ? (
          //renderizado de la info del challenge stat, mostrar average score y solved count
        <div className="container">
          <h2>Challenge: {this.props.challengeStat.challenge_id}</h2>
          <h4>Stats</h4>
          <h4>Solved count: {this.props.challengeStat.solved_count}</h4>
          <h4>Average Score: {this.props.challengeStat.average_score}</h4>
        </div>
      ) : (
        <div>There is no challenge stat in the store... refetching</div>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    challengeStat: state.challengeStat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChallengeStat: (id) => {
      dispatch(fetchChallengeStat(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeStat)
