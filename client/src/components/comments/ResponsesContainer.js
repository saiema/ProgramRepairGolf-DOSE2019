import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import logo from '../../logo.svg';
import Comment from './Comment';
import { fetchResponses, fetchAddResponse } from '../../actions/comment/responsesActions';
import AddResponse from './AddResponse';

class ResponsesContainer extends Component {

    state={
      press:false,
      cant:this.props.responses.count,
      delete:false,
    }

	componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.responses);
    if(!this.state.press || this.state.delete){
      this.props.fetchResponses(this.props.match.params.id);
      this.setState({delte:false});
    }
		}

    handleClick = id => (e) => {
      this.setState({press:true});
    }


    reset = (e) => {
      this.setState({press:false});
    }
    
	render(){
    const press= this.state.press;
    const cant = this.props.responses.count;
		const comment= this.props.comment;
    console.log("aqui señora");
    console.log(press);
    console.log(cant);
    console.log(this.props.responses.count);
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
       <div>
       <Comment comment={this.props.comment} />
        {press & cant=== this.props.responses.count?(
          <div>
             <button onClick={this.reset}>Cerrar</button> 
            <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id}/>
          </div>
        ):(
          <div>
            <button onClick={this.handleClick(comment.id)}> Reply</button>
          </div>
        )}
			  <Responses
				 responses={this.props.responses.data} id={this.props.match.params.id}
			  />
       </div>
      </div>
		)
	}
}

const mapStateToProps = (state,props) => {
  const comment_id=props.match.params.id;
  console.log(comment_id);
  console.log(state.comments.data[0].id === comment_id);
  const c = state.comments.data.find(comment => comment.id===comment_id);
  console.log(c); 
  return {
    responses: state.responses,
    loading: state.responses.loading,
    currentUser_id: state.user.currentUser.id,
    comment: state.comments.data.find(comment => comment.id.toString()===comment_id),
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(" VER");
  return {
    fetchResponses: (id) => {
      dispatch(fetchResponses(id))
    },
    addResponse: (res) => {
       dispatch(fetchAddResponse(res))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
