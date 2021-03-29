import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props); 
        /*
            TODO - set initial state for link name and URL 

        */
            this.state = { name: '', URL: '' };
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
            this.setState({
                name: event.target.value
            })
    }

    handleURLChange = event => {
        this.setState({
            URL: event.target.value
        })
      }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            this.props.handleSubmit(this.state)
            this.setState({
                name: '',
                URL: '',
            })

    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
             <label>Name</label>
             <input className="contain-table form-input" value={this.state.name} onChange={this.handleChange} />
             <label>URL</label>
             <input className="contain-table form-input" value={this.state.URL} onChange={this.handleURLChange} />
             <div className="submit-button">
                <button>Submit</button>
             </div>
            </form>
        )
    
    }
}

export default Form;
