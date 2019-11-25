import React, { Component } from 'react'

class AddResponse extends Component {

state = {
  description: null,
  user_id: "3",
  challenge_id:this.props.challenge_id.toString(),
  comment_id:this.props.comment_id.toString(),
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addResponse(this.state);
}

render() {
  console.log(this.state);
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Description" id="description"  onChange={this.handleChange} />
        </label>
          <button>Reply</button>
        </form>
    </div>
  );
}

}

export default AddResponse
