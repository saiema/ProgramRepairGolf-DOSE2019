import React, { Component } from 'react'

export default class AddChallenge extends Component {
  state = {
    user_id: 1,
    title: null,
    class_name: null,
    description: null,
    source: null,
    point: null,
    owner_solution_id: null,
    test: null,
    option: 1
  }

  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHacker(this.state);
  }

  formTest = (e) => {
    if (e === 2) {
      return (
        <div>
            <label htmlFor="test">owner solution id:</label>
            <input type="text" id="test" onChange={this.handleChange} />
        </div>
      )
    }    
  }

  render() {
    return (
      <div>

        <h1> load the challenge </h1>
        
        <p> select of the type challenge </p>

        <select value={this.state.option} onChange={this.handleChange} >
          {/*<option value={1}>Compilation Challenge</option>
          <option value={2}>Test Challenge</option>*/}
        </select>

        <form onSubmit={this.handleSubmit}>

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
          <label htmlFor="owner_solution_id">owner solution id:</label>
          <input type="text" id="owner_solution_id" onChange={this.handleChange} />
          
          <button>Submit</button>

        </form>

      </div>
    )
  }
}