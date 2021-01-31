import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Account from './Account';
import logo from '../../logo.svg';
import { fetchUsers, newAccount, login, addAdmin, disableAcc,updatePass}  from '../../actions/actionsUser/usersActions';


class UsersContainer extends Component {

	render() {
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
    <div>
      
			<Users
				users={this.props.users}
				newAccount={this.props.newAccount}
				deleteUser={this.props.deleteUser}
        login={this.props.login}
			/>
     
    </div>
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
    deleteuser: (id) => {
      dispatch({type: 'DELETE_USER', id: id })
    },
    newAccount: (user, pass, email) => {
      dispatch(newAccount(user, pass, email))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    login: (user, pass) => {
      dispatch(login(user, pass))
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
