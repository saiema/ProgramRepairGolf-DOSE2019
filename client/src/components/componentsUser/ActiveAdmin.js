import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import f  from '../Authorization';

export default class ActiveAdmin extends Component{
  state = {
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
    this.props.addAdmin(this.state.username);
    e.preventDefault();
  }

    render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input placeholder="username" type="text" id="username" onChange={this.handleChange} />
               
                <button type="submit"> Hacer Admin </button>
            </form>
         </div>
      );
    }
  }
