import React, { Component } from 'react'
import {Form, FormGroup, FormText, Label, Input} from "reactstrap"
import "./Style.css"
class AddResponse extends Component {

state = {
  description: null,
  user_id: this.props.user_id.toString(),
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
  return(
    <section className ="commentSeccion">
    <div className="addRes">
      <h2>Add Response</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Write your Response here" id="description"  onChange={this.handleChange} />
        </label>
          <button className= "button-submit">Send Response</button>
        </form>
    </div>
    </section>
  );
}

}

export default AddResponse
