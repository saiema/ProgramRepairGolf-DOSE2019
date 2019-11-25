import React , {Component} from 'react'
import { connect } from 'react-redux'
//import AddChallenge from './AddChallenge'
import TableCompilationChallenge from './TableCompilationChallenge'
import TableTestChallenge from './TableTestChallenge'
import { 
  fetchAllCompilationChallenge,
  fetchResolvedCompilationChallenge,
  fetchUnsolvedCompilationChallenge
} from '../../actions/compilationChallengeActions'
import { 
  fetchAllTestChallenge,
  fetchResolvedTestChallenge,
  fetchUnsolvedTestChallenge
} from '../../actions/testChallengeActions'

class Challenge extends Component {

  componentDidMount() {
    this.props.fetchAllCompilationChallenge();
    this.props.fetchResolvedCompilationChallenge();
    this.props.fetchUnsolvedCompilationChallenge();
    this.props.fetchAllTestChallenge();
    this.props.fetchResolvedTestChallenge();
    this.props.fetchUnsolvedTestChallenge();
  }


  render(){
    return (
        <div className="container">
            
          <p>all compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.allCompilationChallenge}
          />

          {/* <p>unsolved compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.unsolvedCompilationChallenge}
          />

          <p>resolved compilation challenge</p>
          <TableCompilationChallenge
            listCompilationChallenge={this.props.resolvedCompilationChallenge}
          />  */}

          <p>all test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.allTestChallenge}
          />

          <p>unsolved test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.unsolvedTestChallenge}
          />

          <p>resolved test challenge</p>
          <TableTestChallenge
            listTestChallenge={this.props.resolvedTestChallenge}
          />

          {/* <AddChallenge/> */}

        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    allCompilationChallenge: state.allCompilationChallenge.data,
    resolvedCompilationChallenge: state.resolvedCompilationChallenge.data,
    unsolvedCompilationChallenge: state.unsolvedCompilationChallenge.data,
    allTestChallenge: state.allTestChallenge.data,
    resolvedTestChallenge: state.resolvedTestChallenge.data,
    unsolvedTestChallenge: state.unsolvedTestChallenge.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompilationChallenge: () => {
      dispatch(fetchAllCompilationChallenge())
    },
    fetchResolvedCompilationChallenge: () => {
      dispatch(fetchResolvedCompilationChallenge())
    },
    fetchUnsolvedCompilationChallenge: () => {
      dispatch(fetchUnsolvedCompilationChallenge())
    },
    fetchAllTestChallenge: () => {
      dispatch(fetchAllTestChallenge())
    },
    fetchResolvedTestChallenge: () => {
      dispatch(fetchResolvedTestChallenge())
    },
    fetchUnsolvedTestChallenge: () => {
      dispatch(fetchUnsolvedTestChallenge())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)