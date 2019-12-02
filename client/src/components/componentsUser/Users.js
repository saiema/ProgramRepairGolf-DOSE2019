import React from 'react'
//import { Link } from 'react-router-dom'
import CreateAccount from './CreateAccount';
import Login from './Login';
import ActiveAdmin from './ActiveAdmin';

import "../../App.css";

const Users = ({ users, newAccount, addAdmin, login}) => {
    return (
      <div >
        <CreateAccount newAccount={newAccount}/>
        <Login login={login}/>
        <ActiveAdmin  addAdmin={addAdmin}/>

      </div>
    );
  }

  export default Users
