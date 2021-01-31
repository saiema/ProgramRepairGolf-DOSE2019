import React from 'react'
//import { Link } from 'react-router-dom'
import CreateAccount from './CreateAccount';
import Login from './Login';
import "../../App.css";

const Users = ({ users, newAccount, login}) => {
    return (
      <div >
        <CreateAccount newAccount={newAccount}/>
        <Login login={login}/>
      </div>
    );
  }

  export default Users
