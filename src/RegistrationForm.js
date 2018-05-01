import React, { Component } from 'react';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }

        this.handleEmailChange  = this.handleEmailChange.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited');
    }

    handleEmailChange(event) {
        console.log('e-mail is changed', event.target.value);
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <form className="regForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter e-mail" value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button type="submit">Sent</button>
            </form>
        );
    }
}

export default RegistrationForm;