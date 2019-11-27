import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import f  from '../Authorization';

export default class ResetPassword extends Component{
  state = {
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
    console.log( this.state.email);
    this.props.resPass(this.state.email);
    e.preventDefault();
  }

    render() {
      return (
        <div >
          <div>
            <h2>Escriba la direccion de mail</h2>
            <form onSubmit={this.handleSubmit}>
            <br/>
              <div>
              <label>
                <input placeholder="Email" type="text" id="email" onChange={this.handleChange}/>
              </label>
              </div>
              <button type="submit" >Enviar Email</button>
            </form>
          </div>
        </div>
      );
    }
  }
