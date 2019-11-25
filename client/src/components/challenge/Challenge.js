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
  fetchAllTestChallenge
} from '../../actions/testChallengeActions'

class Challenge extends Component {

  componentDidMount() {
    this.props.fetchAllCompilationChallenge();
    this.props.fetchResolvedCompilationChallenge();
    this.props.fetchUnsolvedCompilationChallenge();
    this.props.fetchAllTestChallenge();
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
    allTestChallenge: state.allTestChallenge.data
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)