import React, { Component } from 'react';
// import Dropdown from './Dropdown';

import Header from './Header';



import { css } from 'aphrodite/no-important';

import appStyles from './AppStyles';


const menu = [
    {
        link:  '/home',
        label: 'Home'
    },
    {
        link:  '/about',
        label: 'About'
    },
    {
        link:  '/works',
        label: 'Works'
    },
    {
        link:  '/contacts',
        label: 'Contacts'
    }
];

class App extends Component {

    render() {
        return (
            <div className={css(appStyles.container)}>
                {/*<Dropdown />*/}
                <Header  items={menu}/>

            </div>
        );
    }

}

export default App;