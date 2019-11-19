import React, { Component } from 'react';
import HackersContainer from './components/HackersContainer';
import Hacker from './components/Hacker';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Bellies from './components/Bellies'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/hackers' component={HackersContainer} />
            <Route path="/bellies" component={Bellies} ></Route>
            <Route path="/:hacker_id" component={Hacker} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
