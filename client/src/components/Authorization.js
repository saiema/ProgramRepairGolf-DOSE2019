import React from 'react';
import axios from 'axios';


const Authorization = {
  isAuthenticated: false,
  authenticate(cb) {
    fetch('http://localhost:55555/user/login', {
      method: 'POST',
      body:JSON.stringify({'username':localStorage.getItem('username') , 'password':localStorage.getItem('password')})
    })
    .then(function(response) {
      if(false) {
        console.log("////////////");
      Authorization.isAuthenticated = false
    } else {
      Authorization.isAuthenticated = true
      }
    })
    .catch(function(error) {
      Authorization.isAuthenticated = false
    })
  },
  signout(cb) {
    Authorization.isAuthenticated = false;
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
//console.log(Authorization.isAuthenticated);

export default Authorization
