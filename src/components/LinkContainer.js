import React from 'react';
import Table from './Table';
// import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: [{name:"Falilou", URL:"https:github.com/falilo"}]
        }
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       
       this.setState({
           favLinks: this.state.favLinks.filter((favLink, favLinkIndex) => {
               return favLinkIndex !== index;
           })
       })
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({
            favLinks: [...this.state.favLinks, favLink]
       })
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table removeLink={this.removeCharacter} favLinks={this.state.favLinks} />
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default LinkContainer;