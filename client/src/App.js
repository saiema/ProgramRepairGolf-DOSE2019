import React, { Component } from 'react';
import HackersContainer from './components/HackersContainer';
import Hacker from './components/Hacker';
import UserStats from './components/userstat/UserStats'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
<<<<<<< HEAD

import MenuComment from './components/comments/MenuComment';
import ResponsesContainer from './components/comments/ResponsesContainer';
=======
import Challenge from './components/challenge/Challenge'
>>>>>>> 7c10b60efb228292dbabd1335cea88872a1a89d7
import PrivateRoute from './components/PrivateRoute';
import ResetPass from './components/componentsUser/EmailContainer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
<<<<<<< HEAD
            <Route path='/comments' component={MenuComment} />
            <Route path='/responses/:id' component={ResponsesContainer} />
=======
            <Route path='/about' component={About} />
            <Route path='/userstats' component={UserStats} />
            <Route path='/hackers' component={HackersContainer} />
            <Route path="/challenge" component={Challenge} />
>>>>>>> 7c10b60efb228292dbabd1335cea88872a1a89d7
            <Route exact path='/resetPassword' component={ResetPass}/>
            <PrivateRoute path='/hackers' component={HackersContainer} />
            <Route path="/:hacker_id" component={Hacker} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
