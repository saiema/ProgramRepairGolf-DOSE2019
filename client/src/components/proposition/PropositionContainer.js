import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../logo.svg";
import { fetchPropositionsGame } from "../../actions/proposition/propositionsActions";
import FormProposition from "./FormProposition";

/**
 * Generates a game for the user and the challenge he selects.
 */
class PropositionContainer extends Component {

  componentDidMount() {
    this.props.fetchPropositionsGame(this.props.userId, this.props.challengeId);
  }

  render() {
    return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo"/>
    ) : (
      <FormProposition
        propositions={this.props.propositions}
        description={this.props.description}
        currentUser={this.props.currentUser}
        isTest={this.props.isTest}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    propositions: state.propositions.data,
    currentUser: state.user.currentUser,
    loading: state.propositions.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPropositionsGame: (userId, challengeId) => {
      dispatch(fetchPropositionsGame(userId, challengeId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropositionContainer);
