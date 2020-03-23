import React, { Component } from 'react';
// import Dropdown from './Dropdown';

import Header from '../../../components/parts/Header/Header';



// import { css } from 'aphrodite/no-important';

// import appStyles from './AppStyles';


const menu = [
    {
        link:  '/works/',
        label: 'Works'
    },
    {
        link:  '/skills/',
        label: 'Skills'
    },
    {
        link:  '/about/',
        label: 'About'
    },
    {
        link:  '/contacts/',
        label: 'Contacts'
    }
];

class App extends Component {

    render() {
        return (
            <div>
                <Header  items={menu}/>
            </div>
        );
    }

}

export default App;