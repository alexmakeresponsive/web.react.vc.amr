import React, { Component } from 'react';

import { connect } from 'react-redux';


// const works = [
//     {
//         title:       'Title 1',
//         description: 'Some description 1'
//     },
//     {
//         title:       'Title 2',
//         description: 'Some description 2'
//     }
// ];

class Works extends Component {

    render() {
        console.log('is it test store?', this.props.testStore);

        return (
            <div>
                <h2>Works</h2>
                <p>
                    Here you se my works
                </p>
                <ul id="worksList">
                    {this.props.testStore.map((item, index) =>
                        <div key={index}>
                            <div>
                                <a className="link" href={item.link}>{item.title}</a>
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        );
    }

}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Works);