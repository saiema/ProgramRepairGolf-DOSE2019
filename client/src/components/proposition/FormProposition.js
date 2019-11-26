import React, {Component} from 'react';
import { TextField, Button} from '@material-ui/core';
import axios from 'axios';

class FormProposition extends Component {

    constructor(props){
        super(props)
        this.state = {
            code:'',
            idProp:''
        };
        
    }

	componentDidMount() {
        this.setState({
            code:this.props.code,
            idProp:this.props.idProp
        })
    }
    
    handleChange = (event) => {
        this.setState({code: event.target.value})
    }

    onClickCompile = (event) => {
        const idProp = this.state.idProp;
        const source = this.state.code;
        axios.get('http://localhost:55555/proposition/'+idProp+'/compile', {
            params: {
                source: source
            }
        })
         .then((res) => {
             if (res.data) {
                 alert("Compile!!!")
             }else {
                 alert("Not compile!!!")
             }
         })
         .catch(error => {
             console.log(error)
         })
         event.preventDefault();    
    }

    onClickSolution = (event) => {
        const idProp = this.state.idProp;
        const source2 = this.state.code;
        console.log(source2);
        axios.get('http://localhost:55555/proposition/'+idProp+'/submit', {
            params: {
                source: source2
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Code:</label>
                    <TextField
                        defaultValue={this.state.code}
                        onChange={this.handleChange}
                        style={{backgroundColor:"#CADAD5"}}
                        fullWidth={true}
                        multiline={true}
                    />
                </form>
                <Button 
                    onClick={this.onClickCompile}
                    variant="outlined"
                    color="primary"
                    style={{marginRight:5, marginLeft:5, marginTop:5}}>
                    Compile
                </Button>
                <Button 
                    onClick={this.onClickSolution}
                    variant="outlined"
                    color="secondary"
                    style={{marginTop:5}}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default FormProposition;