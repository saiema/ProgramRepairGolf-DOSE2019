import React, { Component } from 'react'
import Select from 'react-select'

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
    typeChallenge: 2
  }

  handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHacker(this.state);
  }

  formTest = () => {
    if (this.state.typeChallenge === 2) {
      return (
        <div>
            <label htmlFor="test">test:</label>
            <input type="text" id="test" onChange={this.handleChange} />
        </div>
      )
    }    
  }

  render() {
    const { typeChallenge } = this.state;
    const options = [
      { value: 1, label: 'Compilation Challenge' },
      { value: 2, label: 'Test Challenge' }
    ]
    return (
      <div>

        <h1> Load the challenge </h1>
        
        <p> Select of the type challenge </p>

        <Select
          id = "typeChallenge"
          value={typeChallenge}
          onChange={this.handleChange}
          options={options}
        />

        <form onSubmit={this.handleSubmit} >

          <label htmlFor="title">title:</label>
          <input type="text" id="title" onChange={this.handleChange} />
          <label htmlFor="class_name">class name:</label>
          <input type="text" id="class_name" onChange={this.handleChange} />
          <label htmlFor="description">description:</label>
          <input type="text" id="description" onChange={this.handleChange} />
          <label htmlFor="source">source:</label>
          <input type="text" id="source" onChange={this.handleChange} />
          <label htmlFor="point">points:</label>
          <input type="text" id="point" onChange={this.handleChange} />
          {this.formTest()}
          <button>Submit</button>

        </form>

      </div>
    )
  }
}