import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import f  from '../Authorization';

export default class UpdatePassword extends Component{
  state = {
    oldPass: null,
    newPass: null,
    email: null,
    

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
    this.props.updatePass(this.state.email, this.state.oldPass, this.state.newPass);
    e.preventDefault();
  }

    render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
                <h2> Actualizar contraseña </h2>
                <label htmlFor="E-mail"></label>
                <input placeholder="E-mail" type="email" id="email" onChange={this.handleChange} />
                <label htmlFor="oldPass"></label>
                <input placeholder="Password anterior" type="password" id="oldPass" onChange={this.handleChange} />
                <label htmlFor="newPass"></label>
                <input placeholder="Password nuevo(Min 6 caracteres)"type="password" id="newPass" onChange={this.handleChange} />

                <button type="submit"> Modificar Contraseña </button>
            </form>
         </div>
      );
    }
  }
