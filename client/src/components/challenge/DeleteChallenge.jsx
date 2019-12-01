import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import {executeDeleteChallenge}  from '../../actions/challengeActions';
import TableTestChallengeDelete from './TableTestChallengeDelete'
import TableCompilationChallengeDelete from './TableCompilationChallengeDelete'


class DeleteChallenge extends Component {

  constructor() {
    super();

    this.state = {
        isShowing: false,
        opc: ""
    }
  }
  
  openModalHandler = () => {
    this.setState({
        isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
  }
  show(){
    if (this.state.opc === "allCompilation") {
      return (
       <div className="container">
            <p>all compilation challenge</p>
            { this.state.isShowing ? <div onClick={this.closeModalHandler}>></div> : null}
            <TableCompilationChallengeDelete
              listCompilationChallenge={this.props.allCompilationChallenge}
              executeDeleteChallenge={this.props.executeDeleteChallenge}
              props = {this}
            />
            
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
           { this.state.isShowing ? <div onClick={this.closeModalHandler}>></div> : null}
          <TableTestChallengeDelete
            listTestChallenge={this.props.allTestChallenge}
            executeDeleteChallenge={this.props.executeDeleteChallenge}
            props = {this}
          />
        </div>
      );
    }
    else {
      return (
        <div> </div>
      )
    }
  }

  render () {
    return (
        
      <div className="block-button"> <h1> Delete challenge </h1>
      <div className="Block-buttonGroup">
           <ButtonGroup>
              <Button
                className="button-group"
                onClick={() => this.setState({ opc: "allCompilation" })}
                >compilation challenge
              </Button>
              <Button
                className="button-group"
                onClick={() => this.setState({opc:"allTest"})}
                >test challenge
              </Button> 
            </ButtonGroup>
        </div>
        <div>
            {this.show()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    executeDeleteChallenge: (id) => {
      dispatch(executeDeleteChallenge(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteChallenge)