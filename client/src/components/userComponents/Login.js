import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';

export default class Login extends Component{
  state = {
    username: null,
    password: null
  
  }

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    //console.log(this.state.username);
    this.props.login(this.state.username, this.state.password);
    e.preventDefault();
  }
    
    render() {

      return (
        <div >
          <div>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
            <br/>
              <div>
              <label>
                <input placeholder="Usuario" type="text" id="username" onChange={this.handleChange}/>
              </label>
              </div>
              <div>
              <label>
                <input placeholder="Contraseña" type="password" id="username" onChange={this.handleChange}/>
              </label>
              </div>
              <button type="submit">Iniciar sesión</button>
            </form>
          </div>
          <Link to="/resetPassword">Forgot password?</Link>
        </div>
      );
    }
  }
