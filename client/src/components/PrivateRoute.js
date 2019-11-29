import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './Authorization';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/resetPassword',
          state: { from: props.location }
        }} />
  )} />
)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchHackers: () => {
//       //dispatch(fetchHackers())
//     }
//   }
// }
export default PrivateRoute
