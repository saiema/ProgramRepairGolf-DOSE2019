import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import f  from '../Authorization';

export default class DisableAccount extends Component{
  state = {
    password: null,
    username: null,
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
    console.log( this.state.username);
    this.props.disableAcc(this.state.username, this.state.password);
    e.preventDefault();
  }

    render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
                <h2> Deshabilitar cuenta </h2>
                <input placeholder="username" type="text" id="username" onChange={this.handleChange} />
                <input placeholder="Password" type="text" id="password" onChange={this.handleChange} />

                <button type="submit"> Deshabilitar Cuenta </button>
            </form>
         </div>
      );
    }
  }
