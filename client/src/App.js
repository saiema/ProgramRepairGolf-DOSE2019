import React, { Component } from 'react';
import HackersContainer from './components/HackersContainer';
import Hacker from './components/Hacker';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <PrivateRoute path='/hackers' component={HackersContainer} />
            <Route path="/:hacker_id" component={Hacker} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
