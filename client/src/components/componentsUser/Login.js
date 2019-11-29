import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import f  from '../Authorization';

export default class Login extends Component{
  state = {
    username: null,
    password: null,
    redirect: false
  }

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to= "/propositions" />
    }
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
    render() {
      let setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      let ingresa = () => {
        f.authenticate(this.state.username, this.state.password);
        if(localStorage.getItem('token') != null){
            setRedirect();
        }
      }
    let logout = () => {
      f.signout();
    }

      return (
        <div >
        {this.renderRedirect()}
          <div>
            <h3>Login</h3>
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
              <button onClick={logout} >prueba</button>
          </div>
          <Link to="/resetPassword">Forgot password?</Link>
        </div>
      );
    }
  }
