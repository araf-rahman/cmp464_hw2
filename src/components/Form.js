import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    //    TODO - set initial state for link name and URL 
        this.state = {
            name: '',
            URL: ''
       }
    }

    handleNameChange = event => {
        // TODO - Logic for changing state based on form changes
        this.setState({
            name: event.target.value
        })
    }

    handleURLChange= event => {
        this.setState({
            URL: event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
       //TODO - Logic for calling props to handle submission and setting state changes
        this.props.handleSubmit(this.state)
        this.setState({
            name: '',
            URL: ''
       })
    }

    render() {
        // TODO - Logic for returning a form element with labels and inputs for link name and URL
        return(
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor = "name"> Name </label>
                <input type = "text" onChange = {this.handleNameChange} value = {this.state.name}/>
                <label htmlFor = "URL"> URL </label>
                <input  type = "text" onChange ={this.handleURLChange} value = {this.state.URL}/>
                <button onClick={this.handleAddNew}> Add Favorite Website </button> 
            </form>
        )
    }
}

export default Form;
