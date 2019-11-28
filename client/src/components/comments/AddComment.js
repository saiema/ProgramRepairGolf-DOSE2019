import React, { Component } from 'react'

class AddComment extends Component {

state = {
  title: null,
  description: null,
  //CurrentUser
  user_id: "74",
  challenge_id:this.props.challenge_id.toString(),
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addComment(this.state);
}

render() {
  console.log(this.state);
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Title" id="title" onChange={this.handleChange} />
        </label>
        <label>
          <input type="text" placeholder="Description" id="description"  onChange={this.handleChange} />
        </label>
          <button>Comentar</button>
        </form>
    </div>
  );
}

}

export default AddComment