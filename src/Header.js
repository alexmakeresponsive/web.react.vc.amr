import React, { Component } from 'react';

import PropTypes from 'prop-types';


class Header extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };


    render() {
        return (
            <div className="header">
                {this.props.items.map((item, index) =>
                    <a className="link" href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

export default Header;