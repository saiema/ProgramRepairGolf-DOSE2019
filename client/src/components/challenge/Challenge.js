import React , {Component} from 'react'
import AddChallenge from './AddChallenge'
import ViewChallenge from './ViewChallenge'
import { connect } from 'react-redux';
import {
  addCompilationChallenge,
  addTestChallenge
}  from '../../actions/challengeActions';

class Challenge extends Component {

  state = {
    opc: ""
  }

  show(){
    if (this.state.opc === "add") {
      return (
        <div>
          { 
          <AddChallenge
            addCompilationChallenge={this.props.addCompilationChallenge}
            addTestChallenge={this.props.addTestChallenge}
          /> }
        </div>
      );
    }
    else if (this.state.opc==="view"){
      return (
        <div>
          { <ViewChallenge/> }
        </div>
      );
    }
    else {
      return (
        <div >
           <div className="block-button"> 
            <h1> Challenge </h1> 
          </div>
           <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"add"})}>add challenge</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"view"})}>view challenge</button>
          </div>
        </div>
      )
    }
  }
  
  render () {
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    challenge: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCompilationChallenge: (user_id, title, class_name, description, source, point, owner_solution_id) => {
      dispatch(addCompilationChallenge(user_id, title, class_name, description,
        source, point, owner_solution_id))
    },
    addTestChallenge: (user_id, title, class_name, description, source, point, owner_solution_id, test) => {
      dispatch(addTestChallenge(user_id, title, class_name, description,
        source, point, owner_solution_id, test))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)