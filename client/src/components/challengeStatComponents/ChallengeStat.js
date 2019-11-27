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
        <div className="container">
          <h3>Challenge id: {challengeStat.challenge_id}</h3>
          <h3>Solved count: {challengeStat.solved_count}</h3>
          <h3>Average score: {challengeStat.average_score}</h3>
        </div>
      ) : (
        <div>There is no challenge stat in the store... refetching</div>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    challengeStat: state.challengeStat.data
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
