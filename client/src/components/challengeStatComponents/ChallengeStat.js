import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchChallengeStat } from '../actions/challengeStActions'

class ChallengeStat extends Component {
  componentDidMount() {
    this.props.fetchChallengeStat(this.props.match.params.challengeId)
  }

  render() {
    const { hacker } = this.props
    return (
      hacker ? (
        <div className="container">
          <h1>You're the hacker</h1>
          <h2>#{this.props.hacker.id}</h2>
          <h4>{this.props.hacker.name}</h4>
        </div>
      ) : (
        <div>There is no hacker in the store... refetching</div>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hacker: state.hacker.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHacker: (id) => {
      dispatch(fetchHacker(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hacker)