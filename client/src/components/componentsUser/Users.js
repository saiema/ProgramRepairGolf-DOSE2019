import React from 'react'
//import { Link } from 'react-router-dom'
import CreateAccount from './CreateAccount';
import Login from './Login';
import Reset from './ResetPassword';
import "../../App.css";

const Users = ({ users, newAccount, deleteUser, login, resPass }) => {
    return (
      <div >
        <CreateAccount newAccount={newAccount}/>
        <Login login={login}/>
        <Reset resPass={resPass}/>
      </div>
    );
  }

  export default Users
