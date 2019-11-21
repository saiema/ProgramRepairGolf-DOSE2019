import React , {Component} from 'react'
import { connect } from 'react-redux'
import AddChallenge from './AddChallenge'
import AllCompilationChallenge from './AllCompilationChallenge'
import { fetchAllCompilationChallenge } from '../../actions/compilationChallengeActions'

class Challenge extends Component {

  componentDidMount() {
    this.props.fetchAllCompilationChallenge()
  }


  render(){
    return (
        <div className="container">
            <AllCompilationChallenge
              allCompilationChallenge={this.props.allCompilationChallenge}
            />
            <AddChallenge/>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    allCompilationChallenge: state.allCompilationChallenge.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompilationChallenge: () => {
      dispatch(fetchAllCompilationChallenge())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)