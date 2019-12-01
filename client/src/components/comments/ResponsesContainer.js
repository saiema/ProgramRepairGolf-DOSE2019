import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responses from './Responses';
import logo from '../../logo.svg';
import Comment from './Comment';
import { fetchResponses, fetchAddResponse } from '../../actions/comment/responsesActions';
import AddResponse from './AddResponse';
import { fetchDeleteResponse } from '../../actions/comment/responsesActions';
import { Link } from 'react-router-dom'

class ResponsesContainer extends Component {

    state={
      press:false,
      cant:this.props.responses.count,
      delete:false,
    }

	componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.responses);
    console.log("AHORA IRIA");
    if(!this.state.press){
      this.props.fetchResponses(this.props.match.params.id);
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
    console.log(comment);
    console.log(cant);
    console.log(this.props.currentUser_id);
		return this.props.loading ? (
      <img src={logo} className="App-logo" alt="logo" />
		) : (
      <div>
       <div>
         <Link to={"/challenges_comments/"+comment.challenge_id}>go back</Link>
       <Comment comment={this.props.comment} />
      <AddResponse addResponse={this.props.addResponse} comment_id={comment.id} challenge_id={comment.challenge_id} user_id={this.props.currentUser_id}/>
			<Responses deleteResponse={this.props.deleteResponse} user_id={this.props.currentUser_id}
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
    deleteResponse: (id)=> {
      dispatch(fetchDeleteResponse(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesContainer)
