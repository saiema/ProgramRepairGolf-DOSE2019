import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchChallengeStat }  from '../../actions/challengeStatActions/challengeStatActions';

class ChallengeStat extends Component {
  componentDidMount() {
    this.props.fetchChallengeStat(this.props.match.params.challenge_id)
  }

  render() {
    const { challengeStat } = this.props
    return (
      challengeStat ? (
        <div className="container">
          <h2>#{this.props.challengeStat.id}</h2>
          <h4>{this.props.challengeStat.name}</h4>
        </div>
      ) : (
        <div>There is no challenge stat in the store... refetching</div>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => {
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