import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import TableCompilationChallengeModify from'./TableCompilationChallengeModify'
import TableTestChallengeModify from './TableTestChallengeModify'

class ModifyChallenge extends Component {

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
    if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
           { this.state.isShowing ? <div onClick={this.closeModalHandler}>></div> : null}
          <TableCompilationChallengeModify
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
            props = {this}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
            <div className="container">
               { this.state.isShowing ? <div onClick={this.closeModalHandler}>></div> : null}
              <TableTestChallengeModify
                listTestChallenge={this.props.unsolvedTestChallenge}
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
        
      <div className="block-button"> <h1> Modify challenge </h1>
      <div className="Block-buttonGroup">
          <ButtonGroup>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedCompilation"})}>compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedTest"})}>test challenge</Button>
          </ButtonGroup>
        </div>
        <div>
            {this.show()}
        </div>
      </div>
    )
  }
}

export default ModifyChallenge