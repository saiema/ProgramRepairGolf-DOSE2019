import React, { Component } from 'react';
import Select from 'react-select';
import './Style.css';

export default class AddChallenge extends Component {
  
 state = {
      user_id: 1,
      title: null,
      class_name: null,
      description: null,
      source: null,
      point: null,
      owner_solution_id: 1,
      test: null,
      typeChallenge: "0"
  }

  handleChange = (e) => {
    this.setState({
      typeChallenge: e.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  formTest(){
      return (
        <div className="block-margin">
            <label htmlFor="test">test:</label>
            <textarea className="input-text2" rows="100" cols="100" type="text" id="test" onChange={this.handleChange} />
        </div>
      );
  }

  formCompilation(){
    return (
      <div>
          <div className="block-margin">
            <label htmlFor="title">title:</label>
            <input className="input-text" type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="block-margin">
            <label htmlFor="class_name">class name:</label>
            <input className="input-text" type="text" id="class_name" onChange={this.handleChange} />
          </div>
          <div className="block-margin">
            <label htmlFor="description">description:</label>
            <input className="input-text" type="text" id="description" onChange={this.handleChange} />
          </div>
          <div className="block-margin">
            <label htmlFor="source">source:</label>
            <textarea className="input-text2" rows="100" cols="100" type="text" id="source" onChange={this.handleChange} />
          </div>
          <div className="block-margin">
            <label htmlFor="point">points:</label>
            <input className="input-text" type="text" id="point" onChange={this.handleChange} />
          </div>
    </div>
    );
  }

  show(){
    if (this.state.typeChallenge === "1"){
      return (
        <div>
          {this.formCompilation()}
          <div className="block-button"> 
            <button className="button-submit"> submit </button>
          </div>
        </div>
      );
    }
    else if (this.state.typeChallenge === "2"){
      return (
        <div>
          {this.formCompilation()}
          {this.formTest()}
          <div className="block-button"> 
            <button className="button-submit"> submit </button>
          </div>
        </div>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

  render() {  
    const { typeChallenge } = this.state;
    const options = [
      { value: "1", label: 'Compilation Challenge' },
      { value: "2", label: 'Test Challenge' }
    ]
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} >
          <div className="block-button"> <h1> Load the challenge </h1> </div>
          <p> Select of the type challenge </p>
          <Select         
            value={typeChallenge}
            onChange={this.handleChange}
            options={options}
          />
          {this.show()}
        </form>
    </div>
    )
  }
}