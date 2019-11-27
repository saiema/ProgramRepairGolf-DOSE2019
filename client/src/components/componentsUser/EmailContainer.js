import React, { Component } from 'react';
import { connect } from 'react-redux';
import Email from './Email';
import logo from '../../logo.svg';
import {resPass}  from '../../actions/actionsUser/usersActions';


class EmailContainer extends Component {

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
			<Email
				resPass={this.props.resPass}
			/>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    loading: state.users.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		resPass: (email) => {
      dispatch(resPass(email))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer)
