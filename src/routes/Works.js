import React, { Component } from 'react';

import { connect } from 'react-redux';


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
                    {this.props.testStore.works.map((item, index) =>
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