import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import TableCompilationChallenge from './TableCompilationChallenge'
import TableTestChallenge from './TableTestChallenge'

class ViewChallenge extends Component {

  state = {
    opc: ""
  }

  show(){
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">
            <TableCompilationChallenge
              listCompilationChallenge={this.props.allCompilationChallenge}
            />
        </div>
      );
    }
    else if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
          <TableCompilationChallenge
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="resolvedCompilation"){
      return (
        <div className="container">
          <TableCompilationChallenge
            listCompilationChallenge={this.props.resolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
          <TableTestChallenge
            listTestChallenge={this.props.allTestChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
          <div className="container">
            <TableTestChallenge
              listTestChallenge={this.props.unsolvedTestChallenge}
            />
          </div>
        );
      }
    else if (this.state.opc==="resolvedTest"){
        return (
            <div className="container">
              <TableTestChallenge
                listTestChallenge={this.props.resolvedTestChallenge}
              />
          </div>
        );
      }
    else if (this.state.opc==="challengesAssociatedToUser"){
      return (
          <div className="container">
            <TableCompilationChallenge
              listCompilationChallenge={this.props.challengesAssociatedToUser}
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
        
      <div className="block-button"> <h1> View challenge </h1>
        <div className="Block-buttonGroup">
          <ButtonGroup>
            <Button className="button-group" onClick={() => this.setState({opc:"allCompilation"})}>all compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedCompilation"})}>unsolved compilation challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"resolvedCompilation"})}>resolved compilation challenge</Button> 
            <Button className="button-group" onClick={() => this.setState({opc:"allTest"})}>all test challenge</Button> 
            <Button className="button-group" onClick={() => this.setState({opc:"unsolvedTest"})}>unsolved test challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"resolvedTest"})}>resolved test challenge</Button>
            <Button className="button-group" onClick={() => this.setState({opc:"challengesAssociatedToUser"})}>created by you</Button>
          </ButtonGroup>
        </div>
        <div>
          {this.show()}
        </div>
      </div>
    )
  }
}

export default ViewChallenge