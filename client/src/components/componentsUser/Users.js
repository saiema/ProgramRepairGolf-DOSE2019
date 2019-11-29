import React from 'react'
//import { Link } from 'react-router-dom'
import CreateAccount from './CreateAccount';
import Login from './Login';
import "../../App.css";

const Users = ({ users, newAccount, deleteUser, login}) => {
    return (
      <div>
      <div class="left">
        <CreateAccount newAccount={newAccount}/>
      </div>
      <div class="right">
        <Login login={login}/>
      </div>
      </div>
    );
  }

  export default Users
