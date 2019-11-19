import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBellies } from '../actions/belliesActions'

class Hacker extends Component {
  componentDidMount() {
    this.props.fetchBellies()
  }

  render() {
    const { bellies } = this.props
    return (
      bellies ? (
        <div className="container">
          <h1>Bellie</h1>
        </div>
      ) : (
        <div>There are no bellies here...</div>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bellies: state.bellies.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBellies: () => dispatch(fetchBellies()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hacker)
