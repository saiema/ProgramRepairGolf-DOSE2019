import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import fakeAuth from './Authorization'
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)

console.log(fakeAuth.isAuthenticated);
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchHackers: () => {
//       //dispatch(fetchHackers())
//     }
//   }
// }
export default PrivateRoute
