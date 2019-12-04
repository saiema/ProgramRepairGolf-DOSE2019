import React,{Component} from 'react';
import './Style.css';
import {
  modifyCompilationChallenge,
  modifyTestChallenge
}  from '../../actions/challengeActions';
import { connect } from 'react-redux';

class Modify extends Component {
	constructor(props) {
    super(props);
    this.state = {
			id: this.props.location.query.id,
      title: this.props.location.query.title,
      description: this.props.location.query.description,
			class_name: this.props.location.query.class_name,
			source: this.props.location.query.source,
			point: this.props.location.query.point,
			test: this.props.location.query.test,
			typeTest: this.props.location.query.typeTest
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit1 = (e) => {
    e.preventDefault();
    this.props.modifyCompilationChallenge(this.state);
  }
  
  handleSubmit2 = (e) => {
    e.preventDefault();
    this.props.modifyTestChallenge(this.state);
  }

  formTest = () => {
    const aux = "{";
      return (
        <div className="block-margin">
					<label htmlFor="test">test:</label>
					<p>The class name should be the one entered above plus the word Test</p>
					<p>For example if the class name is Hello:</p>
					<p>package src.test;</p>
					<p>import src.main.Hello;</p>
					<p>import org.junit.*;</p>
					<p>public class HelloTest {aux}</p>
					<p>}</p>
					<textarea className="input-text2" placeholder={this.state.test} rows="100" cols="100" type="text" id="test" onChange={this.handleChange} />
        </div>
      );
  }

  formCompilation = () => {
    const aux = "{";
    return (
      <div>
        <div className="block-margin">
          <label htmlFor="title">title:</label>
          <input className="input-text" placeholder={this.state.title} type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="class_name">class name:</label>
          <input className="input-text" placeholder={this.state.class_name} type="text" id="class_name" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="description">description:</label>
          <input className="input-text" placeholder={this.state.description} type="text" id="description" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="source">source:</label>
          <p>The class name must be the one entered previously </p>
          <p>For example if the class name is Hello: </p>
          <p>package src.main;</p>
          <p>public class Hello {aux}</p>
          <p>}</p>
          <textarea className="input-text2" placeholder={this.state.source} rows="100" cols="100" type="text" id="source" onChange={this.handleChange} />
        </div>
        <div className="block-margin">
          <label htmlFor="point">points:</label>
          <input className="input-text" placeholder={this.state.point} type="number" id="point" onChange={this.handleChange} />
        </div>
    </div>
    );
  }

  show = () => {
		if (this.state.typeTest === false){
      return (
        <div>
          {this.formCompilation()}
          <div className="block-button"> 
            <button 
              className="button-submit" 
              onClick = {this.handleSubmit1}
            > Modified
            </button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          {this.formCompilation()}
          {this.formTest()}
          <div className="block-button"> 
            <button 
              className="button-submit" 
              onClick = {this.handleSubmit2}
            > Modified
            </button>
          </div>
        </div>
      );
    }
	}
	
	render () {
		return (
      <div className="container">
				<form onSubmit={this.handleSubmit} >
					<div className="block-button"> <h1> Modify the challenge </h1> </div>
					<p>CLARIFICATION:</p>
					<p>
						_The validation for compilation challenges is that the source code should not compile, otherwise the challenge cannot be loaded.
					</p>
					<p>
						_The validation for the test challenges is that the source code must compile and also must pass the tests, otherwise the challenge cannot be loaded.
					</p>
					{this.show()}
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    validationChallenge: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyCompilationChallenge: (state) => {
      dispatch(modifyCompilationChallenge(state))
    },
    modifyTestChallenge: (state) => {
      dispatch(modifyTestChallenge(state))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modify);