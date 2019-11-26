import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import f  from '../Authorization';

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

    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    //console.log( this.state.username);
    this.props.login(this.state.username, this.state.password);
    e.preventDefault();
  }

    render() {
      let logout = () => {
        f.signout()
      }
      let ingresa = () => {
        f.authenticate(this.state.username, this.state.password)
      }
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
                <input placeholder="Contraseña" type="password" id="password" onChange={this.handleChange}/>
              </label>
              </div>
              <button onClick={ingresa} >Iniciar sesión</button>
            </form>
          </div>
          <Link to="/resetPassword">Forgot password?</Link>
          <button onClick={logout} >Cerrar Sesion</button>
        </div>
      );
    }
  }
