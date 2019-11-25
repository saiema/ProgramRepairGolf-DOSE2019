import React, { Component } from 'react';
import CommentContainerChallenge from './CommentContainerChallenge';
import CommentContainerUser from './CommentContainerUser';
import ResponsesContainer from './ResponsesContainer';

class MenuComment extends Component{

  state = {
    notChoose:true,
    user_id: null,
    challenge_id: null,
    user:null,
    responses: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmitUser = (e) => {
    e.preventDefault();
    this.setState({notChoose:false, user:true});
  }

  handleSubmitChallenge = (e) => {
    e.preventDefault();
    this.setState({notChoose:false, user:false});
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({notChoose:true, user:null, responses:false});
  }

  handleResponses = (e) => {
    e.preventDefault();
    this.setState ({notChoose:false, responses:true});
  }

  render(){
    return this.state.notChoose ? (
      <div>
      <form onSubmit={this.handleSubmitUser}>
       <label name="User's comments">User's comments:
        <input type="text" placeholder="Id" id="user_id" onChange={this.handleChange} />
       </label>
       <button>Ver</button>
      </form>
      <form onSubmit={this.handleSubmitChallenge}>
       <label name="Challenge's comments">Challenge's comments:
        <input type="text" placeholder="Id" id="challenge_id" onChange={this.handleChange} />
       </label>
       <button>Ver</button>
      </form>
        <button onClick= {this.handleResponses}> VER RESPUESTAS </button>
      </div>
      ): (
        <div>
          <button onClick= {this.handleClick}>Go back</button>
          {this.state.responses ? (
            <ResponsesContainer comment="13"/>
          ):(
            <div>
            {this.state.user ? (
              <CommentContainerUser user={this.state.user_id}/>
            ):(
              <CommentContainerChallenge challenge={this.state.challenge_id}/>
            )}
            </div>
          )}
        </div>
    )
  }

}
export default MenuComment
