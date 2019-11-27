import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import { fetchUnsolvedCompilationChallenge} from '../../actions/compilationChallengeActions'
import { fetchUnsolvedTestChallenge} from '../../actions/testChallengeActions'

class ModifyChallenge extends Component {

  state = {
    opc: ""
  }

  componentDidMount() {
    this.props.fetchUnsolvedCompilationChallenge();
    this.props.fetchUnsolvedTestChallenge();
  }

  show(){
    if (this.state.opc === "unsolvedCompilation"){
      return (
        <div className="container">
          <p>unsolved compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />
        </div>
      );
    }
    else if (this.state.opc==="unsolvedTest"){
        return (
            <div className="container">
            <p>unsolved test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.unsolvedTestChallenge}
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

const mapStateToProps = (state) => {
  return {
    unsolvedCompilationChallenge: state.unsolvedCompilationChallenge.data,
    unsolvedTestChallenge: state.unsolvedTestChallenge.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    fetchUnsolvedCompilationChallenge: () => {
      dispatch(fetchUnsolvedCompilationChallenge())
    },
    fetchUnsolvedTestChallenge: () => {
      dispatch(fetchUnsolvedTestChallenge())
    }
  }
}

const TableCompilationChallenge = ({ listCompilationChallenge }) => {
  const compilationChallengeList = listCompilationChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
          <button className="button-table"> View </button>
          <button className="button-table"> Modify</button>
        </td>
      </tr>
    )
  });
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
          { compilationChallengeList }
        </tbody>
      </table>
    </div>
  )
}
const TableTestChallenge = ({ listTestChallenge }) => {
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
          <button className="button-table"> View </button>
          <button className="button-table"> Modify </button>
        </td>
      </tr>
    )
  });
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Points</th>
            <th>Actions</th>
          </tr> 
          { testChallengeList }
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyChallenge)