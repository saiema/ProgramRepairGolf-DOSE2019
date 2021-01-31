import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from './Account'
import logo from '../../logo.svg';
import { addAdmin, disableAcc,updatePass}  from '../../actions/actionsUser/usersActions';


class AccountContainer extends Component {

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <Account
        addAdmin={this.props.addAdmin}
        disableAcc={this.props.disableAcc}
        updatePass={this.props.updatePass}
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
    addAdmin: (user) => {
      dispatch(addAdmin(user))
    },
    disableAcc: (name,pass) =>{
      dispatch(disableAcc(name,pass))
    },
      updatePass: (email,oldPass,newPass) =>{
      dispatch(updatePass(email,oldPass,newPass))
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
