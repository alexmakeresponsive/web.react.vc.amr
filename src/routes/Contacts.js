import React, { Component } from 'react';

import RegistrationForm from '../RegistrationForm';

class Contacts extends Component {

    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <p>
                    You can write or call me using this contacts:
                </p>
                <RegistrationForm />
            </div>
        );
    }

}

export default Contacts;