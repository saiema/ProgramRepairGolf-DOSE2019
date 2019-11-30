import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import {
  executeDeleteChallenge
}  from '../../actions/challengeActions';
import TableTestChallengeDelete from './TableTestChallengeDelete'
import TableCompilationChallengeDelete from './TableCompilationChallengeDelete'


class DeleteChallenge extends Component {

  state = {
    opc: ""
  }

  show(){
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">
            <TableCompilationChallengeDelete
              listCompilationChallenge={this.props.allCompilationChallenge}
              executeDeleteChallenge={this.props.executeDeleteChallenge}
            />
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
          <TableTestChallengeDelete
            listTestChallenge={this.props.allTestChallenge}
            executeDeleteChallenge={this.props.executeDeleteChallenge}
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