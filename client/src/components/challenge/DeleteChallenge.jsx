import React , {Component} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux'
import {fetchAllCompilationChallenge} from '../../actions/compilationChallengeActions'
import {fetchAllTestChallenge} from '../../actions/testChallengeActions'

class DeleteChallenge extends Component {

  state = {
    opc: ""
  }

  componentDidMount() {
    this.props.fetchAllCompilationChallenge();
    this.props.fetchAllTestChallenge();
  }

  show(){
    if (this.state.opc === "allCompilation") {
      return (
        <div className="container">
            <p>all compilation challenge</p>
            <TableCompilationChallenge
                listCompilationChallenge={this.props.allCompilationChallenge}
            />
        </div>
      );
    }
    else if (this.state.opc==="allTest"){
      return (
        <div className="container">
          <p>all test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.allTestChallenge}
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
                <Button className="button-group" onClick={() => this.setState({opc:"allCompilation"})}>compilation challenge</Button>
                <Button className="button-group" onClick={() => this.setState({opc:"allTest"})}>test challenge</Button> 
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
    allCompilationChallenge: state.allCompilationChallenge.data,
    allTestChallenge: state.allTestChallenge.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompilationChallenge: () => {
      dispatch(fetchAllCompilationChallenge())
    },
    fetchAllTestChallenge: () => {
      dispatch(fetchAllTestChallenge())
    },
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
          <button className="button-table"> VIEW SOURCE </button>
          <button className="button-table"> DELETE </button>
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
          <button className="button-table"> VIEW SOURCE AND TEST</button>
          <button className="button-table"> DELETE </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChallenge)